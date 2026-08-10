"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollRevealStagger from "@/components/ScrollRevealStagger";
import SectionHeader from "@/components/SectionHeader";
import { StackItemCard } from "@/components/Stack";
import { stackSections } from "@/config/stack";
import AboutProductTypeCards from "@/components/about/AboutProductTypeCards";
import AboutShineCard from "@/components/about/AboutShineCard";
import {
  aboutEducation,
  aboutProfile,
  aboutProductTypeGroups,
  aboutWorkExperience,
} from "@/config/about";
import { ArrowRightIcon } from "@/components/icons/outlined";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  aboutEducationTh,
  aboutExperienceTh,
  aboutProductGroupsTh,
} from "@/i18n/content/about";

export default function AboutPageView() {
  const { locale, t } = useLocale();
  const a = t.aboutPage;
  const reduceMotion = useReducedMotion();

  const experience =
    locale === "th" ? aboutExperienceTh : aboutWorkExperience;
  const education = locale === "th" ? aboutEducationTh : aboutEducation;
  const productGroups =
    locale === "th" ? aboutProductGroupsTh : aboutProductTypeGroups;

  return (
    <>
      <div>
        <ScrollReveal immediate>
          <header className="page-container pb-16 pt-4 md:pb-20 md:pt-6">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-kathin-muted">
              {a.eyebrow}
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <motion.div
                className="about-avatar-wrap relative h-24 w-24 shrink-0 sm:h-28 sm:w-28"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                      }
                }
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <span className="about-avatar-ring" aria-hidden />
                <Image
                  src={aboutProfile.avatar}
                  alt={aboutProfile.name}
                  width={112}
                  height={112}
                  className="about-avatar relative z-[1] h-full w-full rounded-full object-cover ring-2 ring-white/10"
                  priority
                />
              </motion.div>
              <div className="min-w-0">
                <h1 className="font-display text-[clamp(1.875rem,6vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-kathin-text break-words">
                  {aboutProfile.name}
                </h1>
                <p className="mt-3 text-lg font-medium text-[var(--kathin-orange)] md:text-xl">
                  {a.role}
                </p>
                <p className="mt-2 text-sm text-kathin-muted">
                  {a.nickname}: {aboutProfile.nickname} · {a.dob}:{" "}
                  {aboutProfile.dateOfBirth}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-kathin-muted md:text-lg md:leading-relaxed">
              {a.intro}
            </p>

            <div className="btn-row mt-10">
              <Link
                href="/projects"
                className="btn btn-accent hover-lift px-7 py-3.5 text-[0.9375rem]"
              >
                {a.viewPortfolio}
                <ArrowRightIcon size="sm" />
              </Link>
              <a
                href={aboutProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline hover-lift px-7 py-3.5 text-[0.9375rem]"
              >
                {a.downloadResume}
              </a>
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal>
          <section
            id="experience"
            className="page-container border-t border-[var(--kathin-border)] py-16 md:py-20"
          >
            <SectionHeader
              eyebrow={a.experienceTitle}
              title={a.journeyTitle}
              description={a.journey}
            />

            <h3 className="mt-12 font-display text-lg font-semibold text-kathin-text md:mt-14 md:text-xl">
              {a.experienceTitle}
            </h3>

            <ol className="about-timeline relative mt-8 space-y-5 md:mt-10 md:space-y-6">
              {experience.map((job, index) => (
                <li
                  key={`${job.company}-${job.period}`}
                  className="relative pl-8 md:pl-10"
                >
                  <span
                    className="about-timeline-dot absolute left-0 top-7 z-[1] md:top-8"
                    aria-hidden
                  />
                  {index < experience.length - 1 ? (
                    <span
                      className="about-timeline-line absolute left-[7px] top-10 bottom-[-1.25rem] md:top-11 md:bottom-[-1.5rem]"
                      aria-hidden
                    />
                  ) : null}
                  <AboutShineCard>
                    <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                      <p className="font-display text-xl font-semibold text-kathin-text md:text-[1.35rem]">
                        {job.company !== "—" ? job.company : "Freelance"}
                      </p>
                      <p className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-kathin-muted backdrop-blur-sm sm:text-sm">
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-medium text-[var(--kathin-orange)]">
                      {job.role}
                    </p>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-kathin-muted">
                      {job.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--kathin-orange)]"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AboutShineCard>
                </li>
              ))}
            </ol>

            <h3 className="mt-14 font-display text-lg font-semibold text-kathin-text md:mt-16 md:text-xl">
              {a.educationTitle}
            </h3>
            <ScrollRevealStagger className="mt-6 space-y-5">
              {education.map((edu) => (
                <AboutShineCard key={edu.school}>
                  <div className="flex items-start gap-4">
                    {"logo" in edu && edu.logo ? (
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-black sm:h-16 sm:w-16">
                        <Image
                          src={edu.logo}
                          alt={`${edu.school} logo`}
                          fill
                          className="object-contain p-1"
                          sizes="64px"
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                        <p className="font-display text-lg font-semibold text-kathin-text">
                          {edu.school}
                        </p>
                        <p className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-kathin-muted sm:text-sm">
                          {edu.year}
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-medium text-kathin-text">
                        {edu.degree}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-kathin-muted">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </AboutShineCard>
              ))}
            </ScrollRevealStagger>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section
            id="stack"
            className="page-container border-t border-[var(--kathin-border)] py-16 md:py-20"
          >
            <SectionHeader
              eyebrow={a.toolsTitle}
              title={a.toolsTitle}
              description={
                locale === "th"
                  ? "Tools ที่ใช้ออกแบบ ทำ prototype และทำงานกับทีม"
                  : "What I use to design, prototype, and work with teams."
              }
            />

            <div className="mt-12 space-y-12 md:mt-14">
              {stackSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-display text-xl font-semibold text-kathin-text">
                    {section.title}
                  </h3>
                  {section.subtitle && (
                    <p className="mt-1 text-sm text-kathin-muted">
                      {section.subtitle}
                    </p>
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
              ))}
            </div>

            <AboutProductTypeCards
              groups={[...productGroups] as typeof aboutProductTypeGroups}
              heading={a.productTypesTitle}
            />
          </section>
        </ScrollReveal>
      </div>

      <Contact />
    </>
  );
}
