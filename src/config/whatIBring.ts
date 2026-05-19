import type { WhatIBringCard } from "./spotlight";

/**
 * What I Bring — การ์ดสติกเกอร์ + หัวข้ออย่างเดียว (แบบ Austin)
 *
 * ใส่ PNG โปร่งใสที่ public/stickers/ แล้วอัปเดต path ด้านล่าง
 */
export const whatIBringCards: WhatIBringCard[] = [
  {
    variant: "sticker",
    fallbackEmoji: "💼",
    titleLead: "Built on",
    titleBold: "4+ years of experience",
  },
  {
    variant: "floating-tools",
    titleLead: "Skilled in modern",
    titleBold: "design tools",
  },
  {
    variant: "sticker",
    fallbackEmoji: "💻",
    titleLead: "Partners with",
    titleBold: "product teams",
  },
  {
    variant: "mockup",
    image: "/stickers/design-mockup.png",
    titleLead: "Solves problems",
    titleBold: "with design",
  },
  {
    variant: "sticker",
    fallbackEmoji: "🚀",
    titleLead: "Turning ideas into",
    titleBold: "shipped products",
  },
];
