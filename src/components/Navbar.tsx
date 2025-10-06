import { Menu, X } from "lucide-react";
import { DesktopNav } from "./NavItems";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="fixed top-3 md:top-10 inset-x-0 mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between py-1 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm max-w-xs md:max-w-2xl lg:max-w-4xl z-50">
      {/* Logo */}
      <div className="font-unbounded text-lg font-bold tracking-wide">
        FEELZFILMS
      </div>

      {/* Desktop Menu */}
      <DesktopNav/>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
};
