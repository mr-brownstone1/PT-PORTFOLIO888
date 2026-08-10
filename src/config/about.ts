export const aboutProfile = {
  name: "Suphaphorn Khan-Ngoen",
  role: "UX/UI Designer",
  nickname: "Kathin",
  dateOfBirth: "10/10/1998",
  avatar: "/avatar.png",
  resumeUrl:
    "https://drive.google.com/drive/folders/1dcWiDtBHBcyuuGoxHZFHhOT-o_kKNFAb?usp=sharing",
  intro:
    "UX/UI designer with 4+ years making software, websites, and apps. I turn messy needs into clear flows, wireframes, and design systems — and work side by side with developers so it ships clean.",
  journey:
    "From co-op and jewelry products to bigger systems today. Research, clear structure, and careful UI stay at the heart of every job.",
};

export const aboutEducation = [
  {
    year: "2017–2020",
    degree: "Bachelor's Degree in Computer Science",
    school: "KMITL",
    description: "Faculty of Science, Bangkok, Thailand.",
    logo: "/about/kmitl-logo.png",
  },
] as const;

export const aboutWorkExperience = [
  {
    period: "July 2023 – Present",
    role: "UX/UI Designer (Full-time)",
    company: "TTD GLOBAL Co., Ltd.",
    responsibilities: [
      "Turned user needs into flows, wireframes, and interactive prototypes.",
      "Designed design systems and interfaces for web and mobile.",
      "Ran usability tests to check designs before shipping.",
      "Worked with developers and product teams so builds stayed on track.",
      "Delivered responsive designs with clear specs and components.",
    ],
  },
  {
    period: "July 2021 – 2023",
    role: "UX/UI Designer (Full-time)",
    company: "Jeweal Prosoft Co., Ltd.",
    responsibilities: [
      "Led UX/UI work across cross-functional teams.",
      "Gathered requirements and shaped product solutions.",
      "Built user flows, wireframes, and prototypes.",
      "Maintained design systems for consistent UI.",
      "Tested usability so products fit real users.",
      "Designed responsive websites and mobile apps.",
    ],
  },
  {
    period: "Jan 2019 – July 2019",
    role: "UX/UI Designer (Co-op)",
    company: "Finn Solution Co., Ltd.",
    responsibilities: [
      "Collected requirements and framed the main problems.",
      "Created journeys, personas, system flows, and wireframes.",
      "Designed UI concepts and prototypes for the product team.",
      "Ran usability tests and summarized what to improve.",
    ],
  },
  {
    period: "Freelance",
    role: "Freelance UX/UI Designer",
    company: "—",
    responsibilities: [
      "Worked with clients to turn business goals into usable design.",
      "Designed interfaces, graphics, and marketing materials.",
      "Delivered digital assets for web and product work.",
    ],
  },
] as const;

export const aboutContact = [
  { label: "Phone", text: "098-4630999", href: "tel:0984630999" },
  { label: "Email", text: "spp.kng1998@gmail.com", href: "mailto:spp.kng1998@gmail.com" },
  { label: "Address", text: "Ladprao 18/2, 10900", href: undefined },
] as const;

export type AboutProductIconKey =
  | "globe"
  | "cog"
  | "banknotes"
  | "chart"
  | "store"
  | "cube"
  | "airplane"
  | "users"
  | "briefcase";

export type AboutProductTypeItem = {
  icon: AboutProductIconKey;
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
      { icon: "globe", label: "Website Design" },
      {
        icon: "cog",
        label: "Admin System",
        sublabel: "Administrative Management System",
      },
      { icon: "banknotes", label: "Accounting System" },
      {
        icon: "chart",
        label: "ERP",
        sublabel: "Enterprise Resource Planning",
      },
      { icon: "store", label: "POS", sublabel: "Point of Sale" },
    ],
  },
  {
    title: "Operations & services",
    items: [
      { icon: "cube", label: "Stock & Inventory Management System" },
      {
        icon: "airplane",
        label: "Travel System",
        sublabel: "Travel Management System",
      },
      {
        icon: "users",
        label: "CRM",
        sublabel: "Customer Relationship Management",
      },
      {
        icon: "briefcase",
        label: "Business",
        sublabel: "Software for Business",
      },
    ],
  },
];
