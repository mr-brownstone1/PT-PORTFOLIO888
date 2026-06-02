/** Shared Problem → Process → Outcome blocks for case studies */
export type CaseStudyNarrative = {
  problem: string;
  process: string | string[];
  outcome: string;
  learnings?: string[];
};

export type PortfolioIntro = {
  role: string;
  tagline: string;
  overview: string;
  tools?: string;
  narrative?: CaseStudyNarrative;
  /** Short note linking to a related case study */
  relatedCaseStudy?: {
    href: string;
    label: string;
    description: string;
  };
};
