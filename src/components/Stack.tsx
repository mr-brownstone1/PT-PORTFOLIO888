"use client";

import Image from "next/image";
import Link from "next/link";
import { stackIconMap } from "@/config/stackIcons";
import { stackSections } from "@/config/stack";
import type { StackItem } from "@/config/stack";
import { ArrowRightIcon, ComponentsIcon } from "@/components/icons/outlined";
import IconBadge from "@/components/ui/IconBadge";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollRevealStagger from "@/components/ScrollRevealStagger";

export function StackItemCard({ item }: { item: StackItem }) {
  if (item.type === "logo") {
    return (
      <div className="kathin-card-inner flex items-center gap-4 p-5 hover-lift md:p-6">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-kathin-text/[0.06]">
          <Image
            src={item.icon}
            alt={item.name}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="font-medium text-kathin-text">{item.name}</p>
          <p className="mt-0.5 text-sm text-kathin-muted">{item.description}</p>
        </div>
      </div>
    );
  }
  const IconComponent = stackIconMap[item.iconKey] ?? ComponentsIcon;
  return (
    <div className="kathin-card-inner flex items-center gap-4 p-5 hover-lift md:p-6">
      <IconBadge size="md">
        <IconComponent size="lg" />
      </IconBadge>
      <div className="min-w-0">
        <p className="font-medium text-kathin-text">{item.name}</p>
        <p className="mt-0.5 text-sm text-kathin-muted">{item.description}</p>
      </div>
    </div>
  );
}

type StackProps = { preview?: boolean };

export default function Stack({ preview = false }: StackProps) {
  const sections = preview ? stackSections.slice(0, 1) : stackSections;

  return (
    <section id="stack" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Tools"
            title="Stack & Workflow"
            description="Software and services I use to design, prototype, and collaborate with teams."
          />
        </ScrollReveal>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <ScrollReveal key={section.title}>
              <div>
                <h3 className="font-display text-xl font-semibold text-kathin-text">
                  {section.title}
                </h3>
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

        {preview && (
          <div className="mt-8 text-center">
            <Link href="/stack" className="btn btn-outline hover-lift inline-flex px-6 py-3">
              View full stack
              <ArrowRightIcon size="sm" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
