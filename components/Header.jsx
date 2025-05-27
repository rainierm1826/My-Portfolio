import Link from "next/link";
import { NavLinks } from "@/lib/types";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Social } from "./SocialLinks";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-10 text-gray-500">
        {NavLinks.map((link) => (
          <li key={link.href} className="text-base font-medium">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black">
      <div className="container mx-auto h-[60px] px-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-10">
          <Nav />
          <DarkModeToggle />
        </div>
        <div className="hidden md:flex">
          <Social />
        </div>
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
