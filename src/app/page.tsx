import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Reviews />
      <CallToAction />
      <Footer />
    </div>
  );
}
