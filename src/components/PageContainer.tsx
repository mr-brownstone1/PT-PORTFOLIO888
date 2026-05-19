type Props = {
  children: React.ReactNode;
  className?: string;
  /** ใช้ max-width แคบกว่า (เช่น case study, บทความ) */
  narrow?: boolean;
};

export default function PageContainer({
  children,
  className = "",
  narrow = false,
}: Props) {
  return (
    <div
      className={`page-container ${narrow ? "max-w-3xl" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
