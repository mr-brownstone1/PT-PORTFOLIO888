import KathinNav from "./KathinNav";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-kathin-bg">
      <KathinNav />
      <div className="main-transition-wrap pt-24 md:pt-28">
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
}
