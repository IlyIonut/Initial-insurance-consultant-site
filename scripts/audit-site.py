"""Read-only regression crawl for the public page families and contact variants."""
from html.parser import HTMLParser
from urllib.request import urlopen, Request
from urllib.error import HTTPError
from urllib.parse import urlsplit, urljoin, unquote
from concurrent.futures import ThreadPoolExecutor
import xml.etree.ElementTree as ET
import json
import sys
from pathlib import Path

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:4173'
BUILD_ONLY = BASE == '--build'
OUTPUT = Path('.next/server/app')
class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.title=''; self.in_title=False; self.h1=0; self.canonical=''; self.ids=set(); self.links=[]; self.inputs=[]; self.options=[]; self.schemas=[]; self.in_schema=False; self.schema=''; self.images=[]; self.current_option=None; self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='title': self.in_title=True
        if tag=='h1': self.h1+=1
        if a.get('id'): self.ids.add(a['id'])
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag=='link' and a.get('rel')=='canonical': self.canonical=a['href']
        if tag=='input': self.inputs.append(a)
        if tag=='option': self.current_option=a; a['_text']=''; self.options.append(a)
        if tag=='img': self.images.append(a)
        if tag=='script' and a.get('type')=='application/ld+json': self.in_schema=True;self.schema=''
    def handle_data(self, text):
        if self.in_title: self.title+=text
        if self.in_schema: self.schema+=text
        if self.current_option is not None: self.current_option['_text']+=text
    def handle_endtag(self, tag):
        if tag=='title': self.in_title=False
        if tag=='option': self.current_option=None
        if tag=='script' and self.in_schema: self.schemas.append(json.loads(self.schema)); self.in_schema=False

def get(path):
    if BUILD_ONLY:
        file = OUTPUT / ('sitemap.xml.body' if path == '/sitemap.xml' else 'index.html' if path == '/' else path.lstrip('/') + '.html')
        return (200, file.read_text(), {}) if file.exists() else (404, '', {})
    try:
        r=urlopen(BASE+path, timeout=20); return r.status,r.read().decode(),dict(r.headers)
    except HTTPError as e: return e.code,e.read().decode(),dict(e.headers)

_,xml,_=get('/sitemap.xml')
urls=[n.text for n in ET.fromstring(xml).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
paths=[urlsplit(u).path for u in urls if not BUILD_ONLY or urlsplit(u).path != '/contact']
cache={};errors=[];titles={}
def read(path):
    status, text, headers=get(path);return path,status,Page(text),headers
for path,status,page,headers in ThreadPoolExecutor(max_workers=4).map(read,paths):
    cache[path]=page
    if status!=200:errors.append([path,'status',status])
    if page.h1!=1:errors.append([path,'h1',page.h1])
    expected='https://ilyasig.ro'+('' if path=='/' else path)
    if page.canonical.rstrip('/')!=expected.rstrip('/'):errors.append([path,'canonical',page.canonical])
    if page.title in titles:errors.append([path,'duplicate title',titles[page.title]])
    titles[page.title]=path
    if any('alt' not in image for image in page.images):errors.append([path,'image without alt'])
    for header in ([] if BUILD_ONLY else ['Content-Security-Policy','X-Frame-Options','X-Content-Type-Options','Permissions-Policy','Referrer-Policy']):
        if not any(k.lower()==header.lower() for k in headers):errors.append([path,'missing header',header])

for path,page in cache.items():
    for href in page.links:
        parsed=urlsplit(urljoin('https://ilyasig.ro'+path,href))
        if parsed.netloc!='ilyasig.ro':continue
        target=parsed.path or '/'
        if BUILD_ONLY and target == '/contact':continue
        if target not in cache:errors.append([path,'internal URL outside sitemap',target]);continue
        if parsed.fragment and unquote(parsed.fragment) not in cache[target].ids:errors.append([path,'missing anchor',href])

variants=[('?pentru=personal&tip=RCA','personal','RCA'),('?tip=Flote%20auto','business','Flote auto'),('?motiv=analiza','business','Analiza polițelor existente')]
for query,audience,insurance in ([] if BUILD_ONLY else variants):
    status,text,_=get('/contact'+query);p=Page(text)
    checked=[a.get('value') for a in p.inputs if a.get('name')=='audience' and 'checked'in a]
    selected=[a.get('value',a['_text']) for a in p.options if 'selected'in a]
    # Next renders option value from its child text; verify the selected markup.
    if status!=200 or checked!=[audience] or selected!=[insurance]:errors.append([query,'form preselection',checked,selected])
    if audience=='personal' and any(a.get('name')=='business' for a in p.inputs):errors.append([query,'hidden business field'])

for path in ([] if BUILD_ONLY else ['/audit-missing-page','/asigurari-firme/audit-missing','/domenii/audit-missing']):
    status,_,_=get(path)
    if status!=404:errors.append([path,'expected 404',status])

print(json.dumps({'canonicalPages':len(cache),'mode':'build' if BUILD_ONLY else 'HTTP','contactVariants':0 if BUILD_ONLY else len(variants),'notFoundChecks':0 if BUILD_ONLY else 3,'errors':errors},ensure_ascii=False,indent=2))
sys.exit(bool(errors))
