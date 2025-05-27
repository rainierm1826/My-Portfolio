import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import { NavLinks } from "@/lib/types";
import Link from "next/link";
import { Social } from "./SocialLinks";
import Logo from "./Logo";

const SidebarLinks = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      {NavLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center justify-center">
        <SheetHeader>
          <SheetTitle><Logo size="text-2xl"/></SheetTitle>
        </SheetHeader>
        <SidebarLinks />
        <Social />
      </SheetContent>
    </Sheet>
  );
}
