import { navItems } from "../constants/navItems";

interface MobileNavProps {
  menuOpen: boolean;
}


export const DesktopNav = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Internal section scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    // Otherwise, let normal link behavior happen (for external links)
  };

  return (
    <ul className="hidden lg:flex items-center md:gap-3 lg:gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            {...(item.href.startsWith("http") || item.href.startsWith("/https")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="hover:text-gray-200 cursor-pointer transition"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};


interface MobileNavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNav = ({ menuOpen, setMenuOpen }: MobileNavProps) => {
  if (!menuOpen) return null;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
      window.open(href.replace("/https", "https"), "_blank");
    }
  };

  return (
    <div className="fixed inset-0 z-[98]">
      {/* 🟡 Transparent backdrop to detect outside clicks */}
      <div
        className="absolute inset-0 bg-black/0"
        onClick={() => setMenuOpen(false)}
      />

      {/* 🟢 Actual nav menu */}
      <div className="absolute top-[4rem] md:top-[7rem] right-32 z-[99] w-[35%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-4 shadow-2xl animate-scaleIn">
        <ul className="flex flex-col gap-2 text-xs font-medium font-unbounded text-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="hover:text-gray-200 cursor-pointer transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

