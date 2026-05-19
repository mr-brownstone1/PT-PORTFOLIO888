type Props = {
  title: string;
  description: string;
  emoji?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function BentoCard({
  title,
  description,
  emoji,
  className = "",
  children,
}: Props) {
  return (
    <div
      className={`austin-card flex min-h-[280px] flex-col justify-between p-8 md:min-h-[320px] md:p-9 ${className}`}
    >
      {emoji && <span className="text-3xl">{emoji}</span>}
      <div className={emoji ? "mt-6" : ""}>
        <h3 className="font-display text-xl font-semibold leading-snug text-austin-text md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-austin-muted md:text-base">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
