import type { AboutProductTypeGroup } from "@/config/about";

type Props = {
  groups: AboutProductTypeGroup[];
  heading?: string;
};

export default function AboutProductTypeCards({
  groups,
  heading = "Systems & products I design",
}: Props) {
  return (
    <div className="mt-14 md:mt-16">
      <h3 className="text-center font-display text-lg font-semibold text-kathin-text md:text-xl">
        {heading}
      </h3>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.title}
            className="kathin-glass-card kathin-glass-specular relative overflow-hidden rounded-2xl p-6 md:p-8"
          >
            <p className="text-sm font-medium text-kathin-muted">{group.title}</p>
            <ul className="mt-5 space-y-3.5">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-sm leading-snug text-kathin-text"
                >
                  <span className="mt-0.5 shrink-0 text-base" aria-hidden>
                    {item.emoji}
                  </span>
                  <span className="min-w-0">
                    <span className="font-medium">{item.label}</span>
                    {item.sublabel ? (
                      <span className="mt-0.5 block text-xs leading-relaxed text-kathin-muted">
                        {item.sublabel}
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
