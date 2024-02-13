import Contact from "@/components/Contact";
import Content from "@/components/Content";
import HeroSection from "@/components/HeroSection";
import Feature from "@/components/Feature";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between text-neutral-50">
      <HeroSection/>
      <Content/>
      <Feature/>
      <Contact/>
    </main>
  );
}
