import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import AboutPageView from "@/components/AboutPageView";

export const metadata: Metadata = {
  title: "About",
  description:
    "UX/UI designer with 4+ years experience—work history, education, tools, and product types.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutPageView />
    </PageLayout>
  );
}
