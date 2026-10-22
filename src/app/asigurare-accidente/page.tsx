import { GeneralInsurancePage } from "@/components/GeneralInsurancePage";
import { insuranceContent } from "@/lib/general-insurance-content";
import { pageMetadata } from "@/lib/seo";
const content = insuranceContent.accidente;
export const metadata = pageMetadata(content.metaTitle, content.metaDescription, "/asigurare-accidente");
export default function Page(){return <GeneralInsurancePage content={content}/>;}
