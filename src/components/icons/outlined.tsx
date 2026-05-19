import Icon, { type IconSize } from "@/components/ui/Icon";

type P = { size?: IconSize; className?: string };

/* —— What I Bring / Bento —— */
export function BriefcaseIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </Icon>
  );
}

export function PaletteIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </Icon>
  );
}

export function UsersIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </Icon>
  );
}

export function PuzzleIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </Icon>
  );
}

export function CheckCircleIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Icon>
  );
}

export function CalendarIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </Icon>
  );
}

/* —— My Skills —— */
export function TargetIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 16a6 6 0 100-12 6 6 0 000 12zm0-10a4 4 0 100 8 4 4 0 000-8z" />
    </Icon>
  );
}

export function CodeIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </Icon>
  );
}

/* —— About page sections —— */
export function UserIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </Icon>
  );
}

export function InfoCircleIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Icon>
  );
}

export function MailIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </Icon>
  );
}

export function GridIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
    </Icon>
  );
}

export function AcademicCapIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </Icon>
  );
}

export function BriefcaseWorkIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </Icon>
  );
}

export function PhoneIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </Icon>
  );
}

export function MapPinIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </Icon>
  );
}

export function LayersIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </Icon>
  );
}

export function ArrowRightIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </Icon>
  );
}

export function ChevronLeftIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M15 19l-7-7 7-7" />
    </Icon>
  );
}

export function ChevronRightIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M9 5l7 7-7 7" />
    </Icon>
  );
}

export function MenuIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Icon>
  );
}

export function XIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M6 18L18 6M6 6l12 12" />
    </Icon>
  );
}

/* —— Stack (แทน Ant Design) —— */
export function FlowIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M4 6h16M4 12h10M4 18h6" />
    </Icon>
  );
}

export function StructureIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M4 5h6v6H4V5zm10 0h6v6h-6V5zM4 13h6v6H4v-6zm10 4h6v2h-6v-2z" />
    </Icon>
  );
}

export function CompassIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M12 3l2.09 6.26L21 12l-6.91 2.74L12 21l-2.09-6.26L3 12l6.91-2.74L12 3z" />
    </Icon>
  );
}

export function LayoutIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
    </Icon>
  );
}

export function FlaskIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M9 3h6v6l5 9a2 2 0 01-1.74 3H5.74A2 2 0 014 18l5-9V3zm3 0v4" />
    </Icon>
  );
}

export function BlocksIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M4 8h6V4H4v4zm10 0h6V4h-6v4zM4 20h6v-4H4v4zm10 0h6v-4h-6v4z" />
    </Icon>
  );
}

export function ComponentsIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M12 4v16M4 12h16" />
    </Icon>
  );
}

export function SwapIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
    </Icon>
  );
}

export function DevicePhoneIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </Icon>
  );
}

export function ShieldIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
    </Icon>
  );
}

export function PlayIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z" />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Icon>
  );
}

export function BoltIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Icon>
  );
}

export function RocketIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M12 15l-3 6 3-2 3 2-3-6zm0-12a6 6 0 016 6c0 2.5-1.5 4.5-3 6l-3 3-3-3c-1.5-1.5-3-3.5-3-6a6 6 0 016-6z" />
    </Icon>
  );
}

export function SendIcon(p: P) {
  return (
    <Icon {...p}>
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </Icon>
  );
}
