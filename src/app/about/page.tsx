import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import ContactButtonWithModal from "@/components/ContactButtonWithModal";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollRevealStagger from "@/components/ScrollRevealStagger";

/* ไอคอนสำหรับแต่ละ section */
const IconUser = () => (
  <svg className="h-5 w-5 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const IconAbout = () => (
  <svg className="h-5 w-5 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconContact = () => (
  <svg className="h-5 w-5 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconSkills = () => (
  <svg className="h-5 w-5 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
  </svg>
);
const IconEducation = () => (
  <svg className="h-5 w-5 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);
const IconWork = () => (
  <svg className="h-5 w-5 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconPhone = () => (
  <svg className="h-4 w-4 shrink-0 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const IconMail = () => (
  <svg className="h-4 w-4 shrink-0 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconPin = () => (
  <svg className="h-4 w-4 shrink-0 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconLayers = () => (
  <svg className="h-5 w-5 text-austin-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

function SectionDivider() {
  return <hr className="my-12 border-0 border-t border-[var(--austin-border)]" aria-hidden />;
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

const skills = {
  "UX/UI": [
    "UX/UI Design (Figma, Framer)",
    "Design System, User Flow, Prototyping",
    "Dev Handoff, Responsive Design",
  ],
  "Graphic Design / Editor": [
    "Illustrator, Photoshop, After Effects, Premiere Pro, CapCut",
  ],
  "Coding (Basic)": ["HTML, CSS, React, Next.js"],
};

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
            className="mb-10 inline-flex items-center gap-2 text-sm text-austin-muted transition hover:text-austin-text"
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
                <div className="flex items-center gap-2">
                  <IconUser />
                  <h1 className="text-2xl font-bold tracking-tight text-austin-text sm:text-3xl">
                    Suphaphorn Khan-Ngoen
                  </h1>
                </div>
                <p className="mt-1 text-austin-muted">UX/UI Designer</p>
                <p className="mt-2 text-sm text-austin-muted">
                  Nickname: {profile.nickname} · DOB: {profile.dateOfBirth}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <SectionDivider />

          {/* About */}
          <ScrollReveal>
            <section>
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-austin-text">
                <IconAbout />
                About
              </h2>
              <p className="mt-4 leading-relaxed text-austin-muted">
                UX/UI Designer with 4 years of experience designing software systems,
                websites, and mobile applications. I translate user needs into user flows,
                wireframes, and design systems, and work closely with developers to deliver
                efficient, user-friendly solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-austin-text px-6 py-3 text-sm font-medium text-austin-bg transition-all duration-[400ms] ease-out hover:scale-[1.02] hover:opacity-90"
                >
                  My projects
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <ContactButtonWithModal
                  className="inline-flex items-center rounded-full border border-[var(--austin-border)] bg-austin-surface px-6 py-3 text-sm font-medium text-austin-text transition-all duration-[400ms] ease-out hover:scale-[1.02]"
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
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-austin-text">
                <IconLayers />
                Systems & products I design
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {projectTypes.map((item) => (
                  <li
                    key={item.short}
                    className="rounded-full border border-[var(--austin-border)] austin-card-inner px-4 py-2 text-sm text-austin-text"
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
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-austin-text">
                <IconContact />
                Contact
              </h2>
              <ul className="mt-4 space-y-3">
                {contactLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-austin-muted transition hover:text-austin-text"
                    >
                      {item.label === "Phone" && <IconPhone />}
                      {item.label === "Email" && <IconMail />}
                      {item.label === "Address" && <IconPin />}
                      <span className="min-w-[4.5rem] text-sm text-austin-muted">{item.label}</span>
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
            <section>
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-austin-text">
                <IconSkills />
                Skills
              </h2>
              <div className="mt-4 space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-sm font-medium text-austin-text">{category}</p>
                    <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-austin-muted">
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
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-austin-text">
                <IconEducation />
                Education
              </h2>
              <ScrollRevealStagger className="mt-4 space-y-8">
                {education.map((edu) => (
                  <div key={edu.school} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    <p className="w-20 shrink-0 text-sm font-medium text-austin-muted">
                      {edu.year}
                    </p>
                    <div>
                      <p className="font-medium text-austin-text">{edu.degree}</p>
                      <p className="mt-0.5 text-sm text-austin-muted">{edu.school}</p>
                      <p className="mt-2 text-sm leading-relaxed text-austin-muted">
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
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-austin-text">
                <IconWork />
                Work experience
              </h2>
              <ScrollRevealStagger className="mt-6 space-y-10">
                {workExperience.map((job, idx) => (
                  <div key={idx} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    <p className="w-44 shrink-0 text-sm text-austin-muted">{job.period}</p>
                    <div>
                      <p className="font-medium text-austin-text">{job.role}</p>
                      {job.company !== "—" && (
                        <p className="mt-0.5 font-medium text-austin-text">{job.company}</p>
                      )}
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-austin-muted">
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
