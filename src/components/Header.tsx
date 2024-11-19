import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg"
import Image from "next/image";

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
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
            <div className="absolute inset-0">
                <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image: linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image: linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset rounded-lg"></div>
            </div>
            <span>Join waitlist</span>
            </button>
            <Image className="md:hidden" src={MenuIcon} alt="menu" />
          </div>
        </div>
      </div>
    </header>
  );
};
