import { GeneralInsurancePage } from "@/components/GeneralInsurancePage";
import { insuranceContent } from "@/lib/general-insurance-content";
import { pageMetadata } from "@/lib/seo";
const content = insuranceContent.viata;
export const metadata = pageMetadata(content.metaTitle, content.metaDescription, "/asigurare-viata");
export default function Page(){return <GeneralInsurancePage content={content}/>;}
