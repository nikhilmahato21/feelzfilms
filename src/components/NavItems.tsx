import { navItems } from "../constants/navItems";

interface MobileNavProps {
  menuOpen: boolean;
}


export const DesktopNav = () => {
  return (
    <ul className="hidden lg:flex items-center md:gap-3 lg:gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <li
          key={item.label}
          className="hover:text-gray-200 cursor-pointer transition"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};





export const MobileNav = ({ menuOpen }: MobileNavProps) => {
  if (!menuOpen) return null;

  return (
   <div className="fixed top-[4rem] md:top-[7rem] right-32 z-[99] w-[35%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-4 shadow-2xl animate-scaleIn">
  <ul className="flex flex-col gap-2 text-xs font-medium font-unbounded text-center">
    {navItems.map((item) => (
      <li
        key={item.label}
        className="hover:text-gray-200 cursor-pointer transition"
      >
        {item.label}
      </li>
    ))}
  </ul>
</div>

  );
};
