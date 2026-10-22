import { SITE } from "@/lib/site";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <><img className="brand-logo" src={inverse ? "/brand/ilyasig-logo-invers.svg" : "/brand/ilyasig-logo.svg"} width={1352} height={445} alt={SITE.name} /><small>BUSINESS &amp; PERSONAL</small></>;
}
