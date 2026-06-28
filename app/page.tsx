import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ConduitStory from "@/components/ConduitStory";
import MainPanel from "@/components/MainPanel";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <ConduitStory />
      <MainPanel />
      <CTA />
      <Footer />
    </main>
  );
}
