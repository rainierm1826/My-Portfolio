"use client";
import Typewriter from "typewriter-effect";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function MainText() {
  return (
    <div
      className={`${rowdies.className} text-3xl md:text-4xl lg:text-6xl font-bold flex flex-col gap-4 items-center`}
    >
      <h1 className="text-center">Hello, My name is Rainier</h1>
      <div className="text-center">
        <Typewriter
          options={{
            strings: ["I'm a software developer", "I'm a Data Analyst"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
