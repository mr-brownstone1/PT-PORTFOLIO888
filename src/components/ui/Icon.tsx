import type { SVGProps } from "react";

export type IconSize = "sm" | "md" | "lg" | "xl";

const sizeClass: Record<IconSize, string> = {
  sm: "h-5 w-5",
  md: "h-7 w-7",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
};

type Props = SVGProps<SVGSVGElement> & {
  size?: IconSize;
  children: React.ReactNode;
};

/** ไอคอน outline มาตรฐานทั้งไซต์ — stroke 1.75, viewBox 24 */
export default function Icon({ size = "md", className = "", children, ...rest }: Props) {
  return (
    <svg
      className={`${sizeClass[size]} shrink-0 ${className}`.trim()}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}
