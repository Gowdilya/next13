import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import { useState } from "react";

type BackgroundColour = "bg-slate-300" | "bg-orange-600" | "bg-green-500";
type TextColour = "text-black" | "text-red-200";

export type NavBarProps = {
  bgColour: BackgroundColour;
  textColour: TextColour;
};
export default function Navbar({ bgColour, textColour }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`z-30 flex filter drop-shadow-md px-4 py-4 h-20 items-center + ${bgColour}`}
    >
      <MobileNav
        open={open}
        setOpen={setOpen}
        bgColour={bgColour}
        textColour={textColour}
      />
      <div className="w-3/12 flex items-center">
        <a className={`text-2xl font-semibold + ${textColour}`} href="/">
          LOGO
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/contact" textColour={textColour}>
            CONTACT
          </NavLink>
          <NavLink to="/about" textColour={textColour}>
            ABOUT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
