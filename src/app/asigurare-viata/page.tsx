import type { Metadata } from "next";
import { GeneralInsurancePage } from "@/components/GeneralInsurancePage";
import { insuranceContent } from "@/lib/general-insurance-content";

const content = insuranceContent.viata;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function LifeInsurancePage() {
  return <GeneralInsurancePage content={content} />;
}
