import BentoCard from "./BentoCard";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import ScrollRevealStagger from "./ScrollRevealStagger";

const cards = [
  {
    emoji: "👋",
    title: "Who am I?",
    description:
      "UX/UI Designer with 4 years of experience designing web and software systems — from user flows and wireframes to design systems and handoff.",
  },
  {
    emoji: "✨",
    title: "My approach",
    description:
      "Great design is clarity, usability, and impact. I focus on understanding user needs and turning complexity into simple, effective experiences.",
  },
  {
    emoji: "🔗",
    title: "My distinct edge",
    description:
      "I bridge design and development — design systems, responsive UI, and clear specs so teams ship consistent, user-friendly products faster.",
  },
];

export default function About() {
  return (
    <section id="about" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Essence"
            title="Behind the Screens"
            description="A glimpse into my mindset, approach, and what I bring to every project."
          />
        </ScrollReveal>
        <ScrollRevealStagger className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
