/**
 * Stack แบ่งตาม Section — แก้ไขที่นี่เมื่อเพิ่ม/ลบ
 * รายการที่มีโลโก้ใช้ icon = path รูป (public/stack/)
 * รายการที่ไม่มีโลโก้ใช้ iconKey = ชื่อไอคอนจาก Ant Design (มินิมอล)
 */
export type StackItemWithLogo = {
  type: "logo";
  name: string;
  description: string;
  icon: string;
};

export type StackItemWithIcon = {
  type: "icon";
  name: string;
  description: string;
  iconKey: string;
};

export type StackItem = StackItemWithLogo | StackItemWithIcon;

export type StackSection = {
  title: string;
  subtitle?: string;
  items: StackItem[];
};

export const stackSections: StackSection[] = [
  {
    title: "Design",
    items: [
      {
        type: "logo",
        name: "Figma",
        description: "Interface design, components, design systems",
        icon: "/stack/figma.png",
      },
      {
        type: "logo",
        name: "Adobe Illustrator",
        description: "Vector graphics and icon design",
        icon: "/stack/illustrator.png",
      },
      {
        type: "logo",
        name: "Adobe Photoshop",
        description: "Image editing and visual assets",
        icon: "/stack/photoshop.png",
      },
    ],
  },
  {
    title: "UX Thinking",
    items: [
      { type: "icon", name: "User Flow Design", description: "Flow & decision mapping", iconKey: "ApartmentOutlined" },
      { type: "icon", name: "Information Architecture", description: "Structure & hierarchy", iconKey: "PartitionOutlined" },
      { type: "icon", name: "User Journey Mapping", description: "End-to-end experience", iconKey: "CompassOutlined" },
      { type: "icon", name: "Wireframing", description: "Low-fidelity layout", iconKey: "LayoutOutlined" },
      { type: "icon", name: "Usability Testing", description: "User feedback & iteration", iconKey: "ExperimentOutlined" },
    ],
  },
  {
    title: "Interface Design",
    items: [
      { type: "icon", name: "Design Systems", description: "Consistent patterns", iconKey: "AppstoreOutlined" },
      { type: "icon", name: "Component Libraries", description: "Reusable UI components", iconKey: "BlockOutlined" },
      { type: "icon", name: "Interaction Design", description: "Feedback & states", iconKey: "SwapOutlined" },
      { type: "icon", name: "Responsive Design", description: "Multi-device layouts", iconKey: "MobileOutlined" },
      { type: "icon", name: "Accessibility", description: "Inclusive design", iconKey: "SafetyOutlined" },
    ],
  },
  {
    title: "Prototyping",
    items: [
      { type: "icon", name: "Interactive Prototypes", description: "Clickable demos", iconKey: "PlayCircleOutlined" },
      { type: "icon", name: "Micro-interactions", description: "Detail motion", iconKey: "ThunderboltOutlined" },
      { type: "icon", name: "Motion for UX", description: "Animation & transition", iconKey: "RocketOutlined" },
      { type: "icon", name: "Design Handoff", description: "Specs & dev handoff", iconKey: "SendOutlined" },
    ],
  },
];
