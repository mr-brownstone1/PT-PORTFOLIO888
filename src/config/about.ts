export const aboutProfile = {
  name: "Suphaphorn Khan-Ngoen",
  role: "UX/UI Designer",
  nickname: "Kathin",
  dateOfBirth: "10/10/1998",
  avatar: "/avatar.png",
  resumeUrl:
    "https://drive.google.com/drive/folders/1dcWiDtBHBcyuuGoxHZFHhOT-o_kKNFAb?usp=sharing",
  intro:
    "UX/UI Designer with 4+ years of experience designing software systems, websites, and mobile applications. I translate user needs into user flows, wireframes, and design systems, and work closely with developers to deliver efficient, user-friendly solutions.",
  journey:
    "From cooperative education and jewelry-industry products to enterprise systems today—research, systems thinking, and polished UI have stayed at the center of every role.",
};

export const aboutEducation = [
  {
    year: "2017–2020",
    degree: "Bachelor's Degree in Computer Science",
    school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
    description: "Faculty of Science, Bangkok, Thailand.",
  },
  {
    year: "2014–2017",
    degree: "High School Certificate in Mathematics and Science",
    school: "Udon Pattanakarn School (UPK)",
    description: "Udon Thani Province, Thailand.",
  },
] as const;

export const aboutWorkExperience = [
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
      "Designed interfaces, graphics, and marketing materials.",
      "Delivered digital design assets for web and product experiences.",
    ],
  },
] as const;

export const aboutContact = [
  { label: "Phone", text: "098-4630999", href: "tel:0984630999" },
  { label: "Email", text: "spp.kng1998@gmail.com", href: "mailto:spp.kng1998@gmail.com" },
  { label: "Address", text: "Ladprao 18/2, 10900", href: undefined },
] as const;

export type AboutProductTypeItem = {
  emoji: string;
  label: string;
  sublabel?: string | null;
};

export type AboutProductTypeGroup = {
  title: string;
  items: AboutProductTypeItem[];
};

export const aboutProductTypeGroups: AboutProductTypeGroup[] = [
  {
    title: "Core platforms",
    items: [
      { emoji: "🌐", label: "Website Design" },
      { emoji: "⚙️", label: "Admin System", sublabel: "Administrative Management System" },
      { emoji: "💰", label: "Accounting System" },
      { emoji: "📊", label: "ERP", sublabel: "Enterprise Resource Planning" },
      { emoji: "🏪", label: "POS", sublabel: "Point of Sale" },
    ],
  },
  {
    title: "Operations & services",
    items: [
      { emoji: "📦", label: "Stock & Inventory Management System" },
      { emoji: "✈️", label: "Travel System", sublabel: "Travel Management System" },
      { emoji: "🤝", label: "CRM", sublabel: "Customer Relationship Management" },
      { emoji: "💼", label: "Business", sublabel: "Software for Business" },
    ],
  },
];
