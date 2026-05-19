/** การ์ด spotlight มาตรฐาน — อีโมจิ + ข้อความสั้น (My Skills) */
export type StandardSpotlightCard = {
  variant?: "spotlight";
  emoji: string;
  title: string;
  description: string;
};

/** การ์ดสติกเกอร์ 3D + หัวข้ออย่างเดียว — What I Bring */
export type StickerSpotlightCard = {
  variant: "sticker";
  /** PNG โปร่งใสใน public/stickers/ */
  sticker?: string;
  /** แสดงเมื่อยังไม่มีไฟล์สติกเกอร์ */
  fallbackEmoji?: string;
  titleLead: string;
  titleBold: string;
  /** กว้าง 2 คอลัมน์บน desktop */
  span?: 1 | 2;
};

/** การ์ดไอคอนเครื่องมือลอย — What I Bring */
export type FloatingToolsSpotlightCard = {
  variant: "floating-tools";
  titleLead: string;
  titleBold: string;
};

/** การ์ด mockup กว้าง — Solves problems with design */
export type MockupSpotlightCard = {
  variant: "mockup";
  image: string;
  titleLead: string;
  titleBold: string;
  span?: 1 | 2;
};

export type SpotlightCard =
  | StandardSpotlightCard
  | StickerSpotlightCard
  | FloatingToolsSpotlightCard
  | MockupSpotlightCard;

/** การ์ด What I Bring */
export type WhatIBringCard =
  | StickerSpotlightCard
  | FloatingToolsSpotlightCard
  | MockupSpotlightCard;
