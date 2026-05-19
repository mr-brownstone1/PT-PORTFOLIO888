import KathinNav from "./KathinNav";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-clip bg-kathin-bg">
      <KathinNav />
      <div className="main-transition-wrap main-offset">
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
}
