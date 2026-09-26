import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductProof from "@/components/ProductProof";
import Features from "@/components/Features";
import Tools from "@/components/Tools";
import Spotlight from "@/components/Spotlight";
import Workflow from "@/components/Workflow";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="content">
        <Hero />
        <ProductProof />
        <Features />
        <Tools />
        <Spotlight />
        <Workflow />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
