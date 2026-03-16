import MainText from "@/components/MainText";
import SeperatorCom from "@/components/SeperatorCom";
import { Rowdies } from "next/font/google";
import SkillList from "@/components/SkillList";
import ProjectList from "@/components/ProjectList";
import ContactForm from "@/components/ContactForm";
import Certifications from "@/components/Certifications";
import Experiences from "@/components/Experiences";

const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
      {/* main */}
      <div className="h-[calc(100vh-60px)] grid place-items-center" id="home">
        {/* text */}
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <MainText />
          <div className="flex flex-wrap items-center justify-center gap-3"></div>
        </div>
      </div>

      {/* experience */}
      <SeperatorCom />
      <div
        className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center"
        id="experience"
      >
        <h1
          className={`${rowdies.className} text-4xl font-bold text-center mb-10`}
        >
          My Experience
        </h1>
        <Experiences />
      </div>

      {/* projects */}
      <SeperatorCom />
      <div
        className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center mx-5"
        id="projects"
      >
        <h1
          className={`${rowdies.className} text-4xl font-bold text-center mb-10`}
        >
          My Projects
        </h1>
        <ProjectList />
      </div>

      {/* skills */}
      <SeperatorCom />
      <div
        className="h-[calc(100vh-60px)] flex flex-col items-center justify-center"
        id="skills"
      >
        <h1
          className={`${rowdies.className} text-4xl font-bold text-center mb-10`}
        >
          My Skills
        </h1>
        <SkillList />
      </div>

      {/* projects */}
      <SeperatorCom />
      <div
        className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center py-12"
        id="certifications"
      >
        <h1
          className={`${rowdies.className} text-4xl font-bold text-center mb-10`}
        >
          Certifications
        </h1>
        <Certifications />
      </div>

      {/* contact */}
      <SeperatorCom />
      <div
        className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center"
        id="contact"
      >
        <h1
          className={`${rowdies.className} text-4xl font-bold text-center mb-10`}
        >
          Contact Me
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
