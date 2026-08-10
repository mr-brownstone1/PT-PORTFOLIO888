import type { ComponentType } from "react";
import type {
  AboutProductIconKey,
  AboutProductTypeGroup,
} from "@/config/about";
import type { IconSize } from "@/components/ui/Icon";
import {
  AirplaneIcon,
  BanknotesIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CogIcon,
  CubeIcon,
  GlobeIcon,
  StoreIcon,
  UsersIcon,
} from "@/components/icons/outlined";

type IconComponent = ComponentType<{ size?: IconSize; className?: string }>;

const productIconMap: Record<AboutProductIconKey, IconComponent> = {
  globe: GlobeIcon,
  cog: CogIcon,
  banknotes: BanknotesIcon,
  chart: ChartBarIcon,
  store: StoreIcon,
  cube: CubeIcon,
  airplane: AirplaneIcon,
  users: UsersIcon,
  briefcase: BriefcaseIcon,
};

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
              {group.items.map((item) => {
                const ItemIcon = productIconMap[item.icon];
                return (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 text-sm leading-snug text-kathin-text"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,87,34,0.1)] text-[var(--kathin-orange)]">
                      <ItemIcon size="sm" />
                    </span>
                    <span className="min-w-0 pt-1">
                      <span className="font-medium">{item.label}</span>
                      {item.sublabel ? (
                        <span className="mt-0.5 block text-xs leading-relaxed text-kathin-muted">
                          {item.sublabel}
                        </span>
                      ) : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
