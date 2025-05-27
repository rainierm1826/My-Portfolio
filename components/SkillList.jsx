import { Skills } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function SkillList() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-3/4 mx-auto gap-5 place-items-center">
      {Skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <TooltipProvider key={skill.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-pointer">
                  <Icon className="w-16 h-16 dark:fill-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
}
