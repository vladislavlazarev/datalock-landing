import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Problems from "@/sections/Problems";
import Features from "@/sections/Features";
import Technology from "@/sections/Technology";
import Metrics from "@/sections/Metrics";
import Security from "@/sections/Security";
import About from "@/sections/About";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Problems />
      <Features />
      <Technology />
      <Metrics />
      <Security />
      <About />
      <CTA />
    </main>
  );
}
