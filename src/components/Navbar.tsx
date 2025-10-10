import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./NavItems";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-3 md:top-10 inset-x-0 mx-auto px-2 md:px-12 flex items-center justify-between py-1 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm max-w-[180px] md:max-w-xl lg:max-w-4xl z-50 hover:scale-105 transition-all duration-150"
    >
      {/* Logo */}
      <div className="font-unbounded text-sm md:text-lg font-bold tracking-wide">
        FEELZ FILMS
      </div>

      {/* Desktop Menu */}
      <DesktopNav />

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </nav>
  );
};
