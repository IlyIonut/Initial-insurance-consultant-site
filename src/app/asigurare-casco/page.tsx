import type { Metadata } from "next";
import { GeneralInsurancePage } from "@/components/GeneralInsurancePage";
import { insuranceContent } from "@/lib/general-insurance-content";

const content = insuranceContent.casco;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function CascoPage() {
  return <GeneralInsurancePage content={content} />;
}
