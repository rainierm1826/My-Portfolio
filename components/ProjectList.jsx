import { Projects } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Projects.map((project) => (
        <Link
          href={project.link}
          key={project.name}
          target="_blank"
          className="group rounded-xl border border-border bg-card overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
        >
          {/* Image */}
          <div className="relative w-full aspect-video overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 p-1"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-4 gap-1.5">
            <h3 className="text-sm font-medium text-foreground leading-snug">
              {project.name}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Footer */}
          <div className="px-4 pb-4 pt-0">
            <span className="inline-flex items-center gap-1 text-xs text-primary font-medium group-hover:underline underline-offset-2">
              View project
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
