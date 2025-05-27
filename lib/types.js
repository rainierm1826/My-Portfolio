import Facebook from "@/public/facebook.svg";
import GithubTwo from "@/public/github2.svg";
import LinkedIn from "@/public/linkedin.svg";
import HTML from "@/public/html.svg";
import CSS from "@/public/css.svg";
import TailwindCSS from "@/public/tailwind.svg";
import JavaScript from "@/public/js.svg";
import React from "@/public/react.svg";
import NextJS from "@/public/nextjs.svg";
import NodeJS from "@/public/nodejs.svg";
import Express from "@/public/ex.svg";
import Python from "@/public/py.svg";
import Flask from "@/public/flask.svg";
import MongoDB from "@/public/mongodb.svg";
import MySQL from "@/public/mysql.svg";
import PostgreSQL from "@/public/postgresql.svg";
import Git from "@/public/git.svg";
import GitHub from "@/public/github.svg";
import GrocerEase from "@/public/project1.png";
import AdminDashboard from "@/public/project2.png";
import RecipeFinder from "@/public/project3.png";

export const NavLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "My Skills",
    href: "#skills",
  },
  {
    label: "My Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SocialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/rainier.marasigan.5",
  },
  {
    icon: GithubTwo,
    href: "https://github.com/rainierm1826",
  },
  {
    icon: LinkedIn,
    href: "https://www.linkedin.com/in/rainier-marasigan-5354662a6",
  },
];

export const Skills = [
  {
    name: "HTML",
    icon: HTML,
  },
  {
    name: "CSS",
    icon: CSS,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindCSS,
  },
  {
    name: "JavaScript",
    icon: JavaScript,
  },
  {
    name: "React",
    icon: React,
  },
  {
    name: "NextJS",
    icon: NextJS,
  },
  {
    name: "NodeJS",
    icon: NodeJS,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Flask",
    icon: Flask,
  },
  {
    name: "MongoDB",
    icon: MongoDB,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "Git",
    icon: Git,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
];

export const Projects = [
  {
    name: "E-Commerce Website",
    description:
      "GrocerEase is an e-commerce website that allows users to buy groceries online.",
    image: GrocerEase,
    link: "https://final-project-grocerease-1.onrender.com",
  },
  {
    name: "Admin Dashboard",
    description:
      "Admin Dashboard is a dashboard for the admin to manage the website.",
    image: AdminDashboard,
    link: "https://final-project-grocerease-1.onrender.com/admin/login",
  },
  {
    name: "Recipe Finder",
    description:
      "Recipe Finder is a website that allows users to find recipes based on the ingredients they have.",
    image: RecipeFinder,
    link: "https://food-porn.vercel.app/",
  },
];
