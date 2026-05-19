import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function ProductsPage() {
  return (
    <PageLayout>
      <div className="page-container py-16 md:py-20">
        <h1 className="font-display text-3xl font-bold tracking-tight text-kathin-text sm:text-4xl">
          Products spotlight
        </h1>
        <p className="mt-4 text-kathin-muted">
          Recent product releases and highlights.
        </p>
        <div className="kathin-glass-card mt-12 rounded-[var(--kathin-radius-lg)] p-12 text-center">
          <p className="text-kathin-muted">This section is coming soon.</p>
          <Link
            href="/#contact"
            className="mt-4 inline-block text-sm font-medium text-[var(--kathin-orange)] hover:underline"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
