import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg"
import Image from "next/image";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/20 p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <Image className="h-8 w-8" src={LogoIcon} alt="logo" />
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition">Features</a>
                <a href="#" className="text-white/70 hover:text-white transition">Developers</a>
                <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
                <a href="#" className="text-white/70 hover:text-white transition">Changelog</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <Image className="md:hidden" src={MenuIcon} alt="menu" />
          </div>
        </div>
      </div>
    </header>
  );
};
