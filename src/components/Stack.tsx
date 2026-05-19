"use client";

import Image from "next/image";
import Link from "next/link";
import { stackIconMap } from "@/config/stackIcons";
import { stackSections } from "@/config/stack";
import type { StackItem } from "@/config/stack";
import { BlockOutlined } from "@ant-design/icons";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollRevealStagger from "@/components/ScrollRevealStagger";

export function StackItemCard({ item }: { item: StackItem }) {
  if (item.type === "logo") {
    return (
      <div className="austin-card-inner flex items-center gap-4 p-5 hover-lift">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-austin-sm bg-austin-text/5">
          <Image
            src={item.icon}
            alt={item.name}
            fill
            className="object-contain p-1.5"
            sizes="48px"
          />
        </div>
        <div className="min-w-0">
          <p className="font-medium text-austin-text">{item.name}</p>
          <p className="mt-0.5 text-sm text-austin-muted">{item.description}</p>
        </div>
      </div>
    );
  }
  const IconComponent = stackIconMap[item.iconKey] ?? BlockOutlined;
  return (
    <div className="austin-card-inner flex items-center gap-4 p-5 hover-lift">
      <div className="stack-card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-austin-sm bg-austin-text/5 text-austin-text">
        <IconComponent style={{ fontSize: 20 }} />
      </div>
      <div className="min-w-0">
        <p className="font-medium text-austin-text">{item.name}</p>
        <p className="mt-0.5 text-sm text-austin-muted">{item.description}</p>
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
                <h3 className="font-display text-xl font-semibold text-austin-text">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <p className="mt-1 text-sm text-austin-muted">{section.subtitle}</p>
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
            <Link
              href="/stack"
              className="hover-lift inline-flex items-center gap-2 rounded-full border border-[var(--austin-border)] px-6 py-3 text-sm font-medium text-austin-text"
            >
              View full stack
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
