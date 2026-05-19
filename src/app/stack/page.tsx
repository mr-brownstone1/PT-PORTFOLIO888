import PageLayout from "@/components/PageLayout";
import { StackItemCard } from "@/components/Stack";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollRevealStagger from "@/components/ScrollRevealStagger";
import { stackSections } from "@/config/stack";
import Link from "next/link";

export default function StackPage() {
  return (
    <PageLayout>
      <div className="page-container pb-16 md:pb-20">
        
          <ScrollReveal>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-kathin-muted hover:text-kathin-text"
            >
              ← Back to home
            </Link>
            <SectionHeader
              eyebrow="Tools"
              title="Stack & Workflow"
              description="Software & services I use in my workflow."
            />
          </ScrollReveal>

          <div className="mt-12 space-y-12">
            {stackSections.map((section) => (
              <ScrollReveal key={section.title}>
                <div>
                  <h2 className="font-display text-xl font-semibold text-kathin-text">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="mt-1 text-sm text-kathin-muted">{section.subtitle}</p>
                  )}
                  <ScrollRevealStagger className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <StackItemCard
                        key={item.type === "logo" ? item.icon : item.name}
                        item={item}
                      />
                    ))}
                  </ScrollRevealStagger>
                </div>
              </ScrollReveal>
            ))}
          </div>
      </div>
    </PageLayout>
  );
}
