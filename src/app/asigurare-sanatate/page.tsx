import type { Metadata } from "next";
import { GeneralInsurancePage } from "@/components/GeneralInsurancePage";
import { insuranceContent } from "@/lib/general-insurance-content";

const content = insuranceContent.sanatate;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function HealthInsurancePage() {
  return <GeneralInsurancePage content={content} />;
}
