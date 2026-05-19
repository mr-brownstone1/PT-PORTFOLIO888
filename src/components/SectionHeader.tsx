type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <p className="font-display text-xs font-medium tracking-tight text-austin-muted">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4375rem)] font-bold leading-[1.2] tracking-tight text-austin-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-austin-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
