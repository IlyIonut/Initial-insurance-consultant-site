import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import type { InsuranceContentPage } from "@/lib/general-insurance-content";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function GeneralInsurancePage({ content }: { content: InsuranceContentPage }) {
  const whatsappHref = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(content.whatsappMessage)}`;

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{content.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{content.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{content.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/contact?tip=${encodeURIComponent(content.eyebrow)}`}>{content.ctaLabel}</ButtonLink>
              <ButtonLink href={whatsappHref} variant="secondary">WhatsApp</ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pe scurt</p>
            <div className="mt-5 grid gap-3">
              {content.heroBullets.map((bullet) => (
                <p key={bullet} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">{bullet}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-950">
          <strong>Important:</strong> {content.importantNote}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Potrivită pentru</h2>
            <div className="mt-5"><CheckList items={content.suitableFor} /></div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Acoperiri întâlnite frecvent</h2>
            <div className="mt-5"><CheckList items={content.commonCoverages} /></div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Ce comparăm</h2>
            <div className="mt-5"><CheckList items={content.compareChecklist} /></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Claritate înainte de ofertă"
            title="Ce merită să știi înainte să alegi"
            description="Textele sunt generalizate din produse și condiții întâlnite la mai mulți asigurători. Oferta finală depinde de datele tale și de condițiile asigurătorului ales."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {content.sections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-slate-950">{section.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{section.body}</p>
                {section.items && <div className="mt-5"><CheckList items={section.items} /></div>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Date pentru ofertă</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Ce informații pregătim</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Pentru primul contact nu trimite documente sau date sensibile. Îmi poți spune doar situația generală, iar detaliile necesare se clarifică ulterior.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <CheckList items={content.offerData} />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Cere ofertă</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Vrei să comparăm variantele?</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Trimite o solicitare scurtă, iar eu te contactez pentru datele necesare. Scopul este să alegi informat, nu să cumperi o poliță pe care nu o înțelegi.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-2 text-slate-950">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Întrebări frecvente</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Întrebări utile înainte de decizie</h2>
        </div>
        <FAQ items={content.faqs} />
      </section>
    </main>
  );
}
