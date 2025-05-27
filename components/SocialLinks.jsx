import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/lib/types";
import Link from "next/link";

export const Social = () => {
  return (
    <ul className="flex">
      {SocialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.href}>
            <Link href={link.href} target="_blank">
              <Button variant="ghost" size="icon">
                <Icon className="w-5 h-5 dark:fill-white" />
              </Button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
