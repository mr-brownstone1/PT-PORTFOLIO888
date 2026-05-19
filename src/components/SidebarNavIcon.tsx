type Props = { path: string };

/**
 * ไอคอน SVG สำหรับเมนู Sidebar (Heroicons outline)
 * path คือ d attribute ของ path ใน SVG
 */
export default function SidebarNavIcon({ path }: Props) {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );
}
