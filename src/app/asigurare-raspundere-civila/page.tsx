import type { Metadata } from "next";
import { GeneralInsurancePage } from "@/components/GeneralInsurancePage";
import { insuranceContent } from "@/lib/general-insurance-content";

const content = insuranceContent.raspundere;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function LiabilityInsurancePage() {
  return <GeneralInsurancePage content={content} />;
}
