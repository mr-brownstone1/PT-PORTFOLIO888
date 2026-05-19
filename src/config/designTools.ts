export type DesignTool = {
  id: string;
  name: string;
  image?: string;
  abbr?: string;
  abbrColor?: string;
  bg?: string;
  /** ตำแหน่ง % ภายในกล่องไอคอน (กึ่งกลางการ์ด) */
  x: number;
  y: number;
  size?: number;
  floatDelay?: number;
  floatDuration?: number;
};

export const designTools: DesignTool[] = [
  {
    id: "indesign",
    name: "Adobe InDesign",
    abbr: "Id",
    abbrColor: "#ff3366",
    bg: "#49021f",
    x: 10,
    y: 28,
    size: 44,
    floatDelay: 0,
    floatDuration: 5.4,
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    image: "/stack/photoshop.png",
    x: 30,
    y: 20,
    size: 52,
    floatDelay: 0.6,
    floatDuration: 4.8,
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    image: "/stack/illustrator.png",
    x: 52,
    y: 14,
    size: 50,
    floatDelay: 1.2,
    floatDuration: 5.2,
  },
  {
    id: "figma",
    name: "Figma",
    image: "/stack/figma.png",
    x: 74,
    y: 24,
    size: 54,
    floatDelay: 0.3,
    floatDuration: 5.6,
  },
  {
    id: "sketch",
    name: "Sketch",
    abbr: "◇",
    abbrColor: "#f8b500",
    bg: "#ffffff",
    x: 18,
    y: 62,
    size: 46,
    floatDelay: 1.5,
    floatDuration: 4.6,
  },
  {
    id: "framer",
    name: "Framer",
    abbr: "✦",
    abbrColor: "#ffffff",
    bg: "#c4956a",
    x: 44,
    y: 56,
    size: 48,
    floatDelay: 0.9,
    floatDuration: 5,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    abbr: "◉",
    abbrColor: "#10a37f",
    bg: "#ececec",
    x: 66,
    y: 60,
    size: 46,
    floatDelay: 1.8,
    floatDuration: 4.4,
  },
  {
    id: "xd",
    name: "Adobe XD",
    abbr: "Xd",
    abbrColor: "#ff61f6",
    bg: "#2d093d",
    x: 86,
    y: 50,
    size: 48,
    floatDelay: 0.4,
    floatDuration: 5.8,
  },
];
