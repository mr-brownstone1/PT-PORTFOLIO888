import IconBadge from "./ui/IconBadge";

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

export default function SectionHeading({ icon, children }: Props) {
  return (
    <h2 className="flex items-center gap-3 text-lg font-bold tracking-tight text-kathin-text md:text-xl">
      <IconBadge size="sm">{icon}</IconBadge>
      {children}
    </h2>
  );
}
