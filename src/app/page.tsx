import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
    </div>
  );
}
