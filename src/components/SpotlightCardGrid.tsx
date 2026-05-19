"use client";

import BentoCard from "./BentoCard";
import FloatingToolsCard from "./FloatingToolsCard";
import MockupShowcaseCard from "./MockupShowcaseCard";
import StickerCard from "./StickerCard";
import type { SpotlightCard } from "@/config/spotlight";
import ScrollRevealStagger from "./ScrollRevealStagger";

const defaultGridClass =
  "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5";

const topRowClass =
  "grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5";

const bottomRowClass =
  "grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:gap-5";

type Props = {
  cards: SpotlightCard[];
  className?: string;
  bento?: boolean;
};

function cardKey(card: SpotlightCard) {
  if (card.variant === "floating-tools") return `tools-${card.titleBold}`;
  if (card.variant === "mockup") return `mockup-${card.titleBold}`;
  if (card.variant === "sticker") return `sticker-${card.titleBold}`;
  return card.title;
}

function renderCard(card: SpotlightCard, index: number) {
  const wide = index >= 3;

  if (card.variant === "floating-tools") {
    return (
      <FloatingToolsCard
        className="h-full"
        titleLead={card.titleLead}
        titleBold={card.titleBold}
      />
    );
  }

  if (card.variant === "mockup") {
    return (
      <MockupShowcaseCard
        className="h-full"
        image={card.image}
        titleLead={card.titleLead}
        titleBold={card.titleBold}
        wide
      />
    );
  }

  if (card.variant === "sticker") {
    return (
      <StickerCard
        className="h-full"
        sticker={card.sticker}
        fallbackEmoji={card.fallbackEmoji}
        titleLead={card.titleLead}
        titleBold={card.titleBold}
        wide={wide}
      />
    );
  }

  return (
    <BentoCard
      variant="spotlight"
      emoji={card.emoji}
      title={card.title}
      description={card.description}
    />
  );
}

/** กริดการ์ด spotlight — What I Bring / My Skills */
export default function SpotlightCardGrid({
  cards,
  className,
  bento = false,
}: Props) {
  if (bento) {
    const topRow = cards.slice(0, 3);
    const bottomRow = cards.slice(3);

    return (
      <div className="mt-10 space-y-4 lg:space-y-5">
        <ScrollRevealStagger className={topRowClass}>
          {topRow.map((card, index) => (
            <div key={cardKey(card)} className="h-full">
              {renderCard(card, index)}
            </div>
          ))}
        </ScrollRevealStagger>

        {bottomRow.length > 0 && (
          <ScrollRevealStagger className={bottomRowClass}>
            {bottomRow.map((card, index) => (
              <div key={cardKey(card)} className="h-full">
                {renderCard(card, index + 3)}
              </div>
            ))}
          </ScrollRevealStagger>
        )}
      </div>
    );
  }

  return (
    <ScrollRevealStagger className={className ?? defaultGridClass}>
      {cards.map((card, index) => (
        <div key={cardKey(card)} className="h-full">
          {renderCard(card, index)}
        </div>
      ))}
    </ScrollRevealStagger>
  );
}
