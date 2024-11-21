import Logo from "@/assets/logo.svg";
import XLogo from "@/assets/social-x.svg";
import InstagramLogo from "@/assets/social-instagram.svg";
import YoutubeLogo from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex gap-2 items-center lg:flex-1">
            <Image src={Logo} alt="logo" className="h-6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:flex-1 lg:justify-center">
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Features
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Developers
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Company
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Blog
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <Image className="lg:h-7 lg:w-8" src={XLogo} alt="logo" />
            <Image className="lg:h-7 lg:w-7" src={InstagramLogo} alt="logo" />
            <Image className="lg:h-7 lg:w-7" src={YoutubeLogo} alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};
