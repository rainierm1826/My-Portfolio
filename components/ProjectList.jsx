import { Projects } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList() {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
      {Projects.map((project) => (
        <Link href={project.link} key={project.name} target="_blank">
          <div key={project.name} className="cursor-pointer flex flex-col items-center justify-center">
            <Image
              src={project.image}
              alt={project.name}
              width={350}
              height={350}
          />
            <h1 className="text-xl font-bold text-center">{project.name}</h1>
            <p className="text-gray-500 text-center text-xs w-3/4 mx-auto">{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
