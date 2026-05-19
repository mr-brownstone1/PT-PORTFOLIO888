"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import BentoCard from "./BentoCard";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import ScrollRevealStagger from "./ScrollRevealStagger";
import { projects } from "@/config/projects";

const strengths = [
  {
    emoji: "📅",
    title: "4+ years of experience",
    description:
      "Full-time and freelance UX/UI across product companies — from research and wireframes to shipped interfaces.",
  },
  {
    emoji: "🎨",
    title: "Skilled in modern design tools",
    description:
      "Figma, design systems, prototyping, and dev handoff — plus Illustrator and Photoshop for visual work.",
  },
  {
    emoji: "🚀",
    title: "Led fast-moving product teams",
    description:
      "Collaborated with developers and product owners at TTD GLOBAL and Jeweal Prosoft to deliver ERP, POS, and web products.",
  },
  {
    emoji: "🧩",
    title: "Solves problems with design",
    description:
      "Website, admin, ERP, POS, CRM, and inventory systems — shaped around real user and business needs.",
  },
  {
    emoji: "🎯",
    title: "Turning ideas into milestones",
    description:
      "Usability testing, iterative UI, and clear documentation so ideas move from discovery to launch with confidence.",
  },
];

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="austin-card flex flex-col items-center justify-center p-8 text-center md:p-10">
      <p className="font-display text-5xl font-bold tracking-tight text-austin-text md:text-6xl">
        +{count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-austin-muted md:text-base">{label}</p>
    </div>
  );
}

export default function WorkWithMe() {
  const projectCount = projects.length;

  return (
    <section id="work-with-me" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Value"
            title="Why Work With Me?"
            description="Backed by experience across product teams, freelance clients, and complex business systems."
          />
        </ScrollReveal>

        <ScrollRevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <BentoCard key={s.title} {...s} className="lg:last:col-span-1" />
          ))}
        </ScrollRevealStagger>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <AnimatedStat value={projectCount} suffix="" label="Projects delivered" />
          <AnimatedStat value={4} suffix="+" label="Years of experience" />
        </div>
      </div>
    </section>
  );
}
