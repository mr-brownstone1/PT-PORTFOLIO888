import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import WorkTypesMarquee from "@/components/WorkTypesMarquee";
import Projects from "@/components/Projects";
import WorkWithMe from "@/components/WorkWithMe";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <WorkTypesMarquee />
      <About />
      <WorkWithMe />
      <Projects />
      <Contact />
    </PageLayout>
  );
}
