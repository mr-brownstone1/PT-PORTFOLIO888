import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
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

export default function AboutPage() {
  return (
    <PageLayout>
      <div>
        <ScrollReveal immediate>
          <header className="page-container pb-16 pt-4 md:pb-20 md:pt-6">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-kathin-muted">
              About Me
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <Image
                src={aboutProfile.avatar}
                alt={aboutProfile.name}
                width={112}
                height={112}
                className="h-24 w-24 shrink-0 rounded-full object-cover ring-2 ring-white/10 sm:h-28 sm:w-28"
                priority
              />
              <div className="min-w-0">
                <h1 className="font-display text-[clamp(1.875rem,6vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-kathin-text break-words">
                  {aboutProfile.name}
                </h1>
                <p className="mt-3 text-lg font-medium text-[var(--kathin-orange)] md:text-xl">
                  {aboutProfile.role}
                </p>
                <p className="mt-2 text-sm text-kathin-muted">
                  Nickname: {aboutProfile.nickname} · DOB:{" "}
                  {aboutProfile.dateOfBirth}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-kathin-muted md:text-lg md:leading-relaxed">
              {aboutProfile.intro}
            </p>

            <div className="btn-row mt-10">
              <Link
                href="/projects"
                className="btn btn-accent hover-lift px-7 py-3.5 text-[0.9375rem]"
              >
                View Portfolio
                <ArrowRightIcon size="sm" />
              </Link>
              <a
                href={aboutProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline hover-lift px-7 py-3.5 text-[0.9375rem]"
              >
                Download Resume
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
              eyebrow="Experience"
              title="My Design Journey"
              description={aboutProfile.journey}
            />

            <h3 className="mt-12 font-display text-lg font-semibold text-kathin-text md:mt-14 md:text-xl">
              Work History
            </h3>

            <ScrollRevealStagger className="mt-8 space-y-5 md:mt-10">
              {aboutWorkExperience.map((job) => (
                <AboutShineCard key={`${job.company}-${job.period}`}>
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
              ))}
            </ScrollRevealStagger>

            <h3 className="mt-14 font-display text-lg font-semibold text-kathin-text md:mt-16 md:text-xl">
              Education
            </h3>
            <ScrollRevealStagger className="mt-6 space-y-5">
              {aboutEducation.map((edu) => (
                <AboutShineCard key={edu.school}>
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
              eyebrow="Tools"
              title="Stack & Workflow"
              description="Software and services I use to design, prototype, and collaborate with teams."
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

            <AboutProductTypeCards groups={aboutProductTypeGroups} />
          </section>
        </ScrollReveal>

      </div>

      <Contact />
    </PageLayout>
  );
}
