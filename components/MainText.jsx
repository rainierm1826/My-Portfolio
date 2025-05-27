"use client";
import Typewriter from "typewriter-effect";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function MainText() {
  return (
    <div className={`${rowdies.className} text-3xl md:text-4xl font-bold flex flex-col gap-4 items-center`}>
      <h1 className="text-center">Hello, My name is Rainier</h1>
      <div>
        <Typewriter
          options={{
            strings: ["I'm a website developer", "I'm an AI developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
