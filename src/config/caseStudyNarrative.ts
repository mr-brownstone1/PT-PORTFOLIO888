/** Shared narrative for case studies — process steps drive the UI strip */
export type CaseStudyNarrative = {
  problem: string;
  process: string | string[];
  outcome: string;
  learnings?: string[];
};

export type PortfolioIntro = {
  role: string;
  tagline: string;
  /** Optional long blurb — prefer tagline + highlights */
  overview?: string;
  tools?: string;
  /** Short selling points — what was delivered */
  highlights?: string[];
  narrative?: CaseStudyNarrative;
  /** Short note linking to a related case study */
  relatedCaseStudy?: {
    href: string;
    label: string;
    description: string;
  };
};
