type Props = {
  title: string;
  description?: string;
  items?: string[];
  emoji?: string;
  icon?: React.ReactNode;
  /** spotlight = กลางการ์ด + อีโมจิใหญ่ แบบ Kathin */
  variant?: "default" | "spotlight";
  className?: string;
  children?: React.ReactNode;
};

export default function BentoCard({
  title,
  description,
  items,
  emoji,
  icon,
  variant = "default",
  className = "",
  children,
}: Props) {
  const isSpotlight = variant === "spotlight";
  const hasLeading = Boolean(emoji || icon);

  if (isSpotlight) {
    return (
      <div
        className={`group kathin-card flex min-h-[220px] flex-col items-center justify-center px-6 py-10 text-center transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_rgba(255,87,34,0.15)] sm:min-h-[240px] sm:px-8 sm:py-11 ${className}`}
      >
        {emoji && (
          <span
            className="bento-emoji select-none text-[2.75rem] leading-none sm:text-[3rem]"
            aria-hidden
          >
            {emoji}
          </span>
        )}
        <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-kathin-text sm:text-xl">
          {title}
        </h3>
        {description && (
          <p className="mt-2.5 max-w-[17rem] text-sm leading-relaxed text-kathin-muted sm:text-[0.9375rem]">
            {description}
          </p>
        )}
        {children}
      </div>
    );
  }

  return (
    <div
      className={`group kathin-card flex min-h-[280px] flex-col justify-between p-8 transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_rgba(255,87,34,0.2)] md:min-h-[300px] md:p-9 ${className}`}
    >
      {icon}
      {emoji && !icon && <span className="text-3xl">{emoji}</span>}
      <div className={hasLeading ? "mt-6" : ""}>
        <h3 className="font-display text-xl font-semibold leading-snug text-kathin-text transition-colors duration-300 group-hover:text-[var(--kathin-orange)] md:text-2xl">
          {title}
        </h3>
        {items ? (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-kathin-muted md:text-base">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--kathin-orange)]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          description && (
            <p className="mt-3 text-sm leading-relaxed text-kathin-muted md:text-base">
              {description}
            </p>
          )
        )}
      </div>
      {children}
    </div>
  );
}
