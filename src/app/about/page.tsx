import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import ContactButtonWithModal from "@/components/ContactButtonWithModal";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollRevealStagger from "@/components/ScrollRevealStagger";
import { skillsByCategory } from "@/config/skills";
import SectionHeading from "@/components/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BriefcaseWorkIcon,
  GridIcon,
  InfoCircleIcon,
  LayersIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@/components/icons/outlined";

function SectionDivider() {
  return <hr className="my-12 border-0 border-t border-[var(--kathin-border)]" aria-hidden />;
}

const profile = {
  nickname: "Kathin",
  dateOfBirth: "10/10/1998",
};

const education = [
  {
    year: "2017–2020",
    degree: "Bachelor's Degree in Computer Science",
    school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
    description:
      "Faculty of Science, Bangkok, Thailand.",
  },
  {
    year: "2014–2017",
    degree: "High School Certificate in Mathematics and Science",
    school: "Udon Pattanakarn School (UPK)",
    description:
      "Udonthani Province, Thailand.",
  },
];

const workExperience = [
  {
    period: "July 2023 – Present",
    role: "UX/UI Designer (Full-time)",
    company: "TTD GLOBAL Co., Ltd.",
    responsibilities: [
      "Analyzed user needs and translated insights into user flows, wireframes, and interactive prototypes.",
      "Designed scalable design systems and user-centered interfaces for web and mobile applications.",
      "Conducted usability testing to validate design decisions and improve overall user experience.",
      "Collaborated closely with developers and product teams to ensure feasible and consistent implementation.",
      "Delivered responsive designs and supported developer handoff with clear specifications and components.",
    ],
  },
  {
    period: "July 2021 – 2023",
    role: "UX/UI Designer (Full-time)",
    company: "Jeweal Prosoft Co., Ltd.",
    responsibilities: [
      "Led UX/UI design projects within cross-functional teams.",
      "Gathered and analyzed user requirements to define effective product solutions.",
      "Developed user flows, wireframes, and interactive prototypes.",
      "Built and maintained design systems to ensure UI consistency.",
      "Conducted usability testing to ensure products aligned with user needs.",
      "Designed responsive websites and mobile applications.",
    ],
  },
  {
    period: "Jan 2019 – July 2019",
    role: "UX/UI Designer (Cooperative Education)",
    company: "Finn Solution Co., Ltd.",
    responsibilities: [
      "Gathered user requirements and defined key problem statements.",
      "Created user journeys, personas, system flows, and wireframes.",
      "Designed UI concepts and prototypes to support product development.",
      "Conducted usability testing and summarized insights for design improvements.",
    ],
  },
  {
    period: "Freelance",
    role: "Freelance UX/UI Designer",
    company: "—",
    responsibilities: [
      "Collaborated with clients to translate business goals into user-centered design solutions.",
      "Designed UI interfaces, graphics, and marketing materials.",
      "Delivered digital design assets for web and product experiences.",
    ],
  },
];

const contactLinks = [
  { label: "Phone", text: "098-4630999", href: "tel:0984630999", icon: false },
  { label: "Email", text: "spp.kng1998@gmail.com", href: "mailto:spp.kng1998@gmail.com", icon: false },
  { label: "Address", text: "Ladprao 18/2, 10900", href: "#", icon: false },
];

const projectTypes: { short: string; full: string | null }[] = [
  { short: "Website Design", full: null },
  { short: "Admin System", full: "Administrative Management System" },
  { short: "Accounting System", full: null },
  { short: "ERP", full: "Enterprise Resource Planning" },
  { short: "POS", full: "Point of Sale" },
  { short: "Stock & Inventory Management System", full: null },
  { short: "Travel System", full: "Travel Management System" },
  { short: "CRM", full: "Customer Relationship Management" },
  { short: "Buniness", full: "Software for Business" },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="page-container py-8 md:py-12">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-kathin-muted transition hover:text-kathin-text"
          >
            <span>←</span> Back to homepage
          </Link>

          {/* Profile */}
          <ScrollReveal>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Image
                src="/avatar.png"
                alt="Suphaphorn Khan-Ngoen"
                width={120}
                height={120}
                className="h-28 w-28 shrink-0 rounded-full object-cover sm:h-32 sm:w-32"
              />
              <div>
                <div className="flex items-center gap-3">
                  <IconBadge size="sm">
                    <UserIcon size="md" />
                  </IconBadge>
                  <h1 className="text-2xl font-bold tracking-tight text-kathin-text sm:text-3xl">
                    Suphaphorn Khan-Ngoen
                  </h1>
                </div>
                <p className="mt-1 text-kathin-muted">UX/UI Designer</p>
                <p className="mt-2 text-sm text-kathin-muted">
                  Nickname: {profile.nickname} · DOB: {profile.dateOfBirth}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <SectionDivider />

          {/* About */}
          <ScrollReveal>
            <section>
              <SectionHeading icon={<InfoCircleIcon size="md" />}>About</SectionHeading>
              <p className="mt-4 leading-relaxed text-kathin-muted">
                UX/UI Designer with 4 years of experience designing software systems,
                websites, and mobile applications. I translate user needs into user flows,
                wireframes, and design systems, and work closely with developers to deliver
                efficient, user-friendly solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="btn btn-accent hover-lift px-6 py-3"
                >
                  My projects
                  <ArrowRightIcon size="sm" />
                </Link>
                <ContactButtonWithModal
                  className="btn btn-outline hover-lift px-6 py-3"
                >
                  Contact
                </ContactButtonWithModal>
              </div>
            </section>
          </ScrollReveal>

          <SectionDivider />

          {/* ประเภทงานที่ออกแบบ */}
          <ScrollReveal>
            <section>
              <SectionHeading icon={<LayersIcon size="md" />}>
                Systems & products I design
              </SectionHeading>
              <ul className="mt-4 flex flex-wrap gap-2">
                {projectTypes.map((item) => (
                  <li
                    key={item.short}
                    className="rounded-full border border-[var(--kathin-border)] kathin-card-inner px-4 py-2 text-sm text-kathin-text"
                  >
                    {item.full ? `${item.short} (${item.full})` : item.short}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <SectionDivider />

          {/* Contact */}
          <ScrollReveal>
            <section>
              <SectionHeading icon={<MailIcon size="md" />}>Contact</SectionHeading>
              <ul className="mt-4 space-y-3">
                {contactLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-kathin-muted transition hover:text-kathin-text"
                    >
                      {item.label === "Phone" && (
                        <PhoneIcon size="sm" className="text-[var(--kathin-orange)]" />
                      )}
                      {item.label === "Email" && (
                        <MailIcon size="sm" className="text-[var(--kathin-orange)]" />
                      )}
                      {item.label === "Address" && (
                        <MapPinIcon size="sm" className="text-[var(--kathin-orange)]" />
                      )}
                      <span className="min-w-[4.5rem] text-sm text-kathin-muted">{item.label}</span>
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <SectionDivider />

          {/* Skills */}
          <ScrollReveal>
            <section id="skills">
              <SectionHeading icon={<GridIcon size="md" />}>My Skills</SectionHeading>
              <div className="mt-4 space-y-4">
                {Object.entries(skillsByCategory).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-sm font-medium text-kathin-text">{category}</p>
                    <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-kathin-muted">
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <SectionDivider />

          {/* Education */}
          <ScrollReveal>
            <section>
              <SectionHeading icon={<AcademicCapIcon size="md" />}>Education</SectionHeading>
              <ScrollRevealStagger className="mt-4 space-y-8">
                {education.map((edu) => (
                  <div key={edu.school} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    <p className="w-20 shrink-0 text-sm font-medium text-kathin-muted">
                      {edu.year}
                    </p>
                    <div>
                      <p className="font-medium text-kathin-text">{edu.degree}</p>
                      <p className="mt-0.5 text-sm text-kathin-muted">{edu.school}</p>
                      <p className="mt-2 text-sm leading-relaxed text-kathin-muted">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </ScrollRevealStagger>
            </section>
          </ScrollReveal>

          <SectionDivider />

          {/* Work experience */}
          <ScrollReveal>
            <section>
              <SectionHeading icon={<BriefcaseWorkIcon size="md" />}>
                Work experience
              </SectionHeading>
              <ScrollRevealStagger className="mt-6 space-y-10">
                {workExperience.map((job, idx) => (
                  <div key={idx} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    <p className="w-44 shrink-0 text-sm text-kathin-muted">{job.period}</p>
                    <div>
                      <p className="font-medium text-kathin-text">{job.role}</p>
                      {job.company !== "—" && (
                        <p className="mt-0.5 font-medium text-kathin-text">{job.company}</p>
                      )}
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-kathin-muted">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </ScrollRevealStagger>
            </section>
          </ScrollReveal>
      </div>
    </PageLayout>
  );
}
