import { Code2, Layers, Wrench } from "lucide-react";
import type { IconType } from "react-icons";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact, FaSass } from "react-icons/fa6";
import { SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiVite, SiVercel } from "react-icons/si";

interface skillCategoriesProps {
    title: string;
    icon: IconType;
    description: string;
    skills: string[];
}

export const skillCategories: skillCategoriesProps[] = [
    {
        title: "Core Frontend",
        icon: Code2,
        description: "The essential foundations of modern web development.",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)"]
    },
    {
        title: "Styling & Tools",
        icon: Wrench,
        description: "Build tools, deployment, and design systems.",
        skills: ["Tailwind CSS v4", "Vite", "Git & GitHub", "Bootstrap"]
    },
    {
        title: "Advanced Ecosystem",
        icon: Layers,
        description: "Frameworks and state management for scalable apps.",
        skills: ["React.js", "TypeScript", "Redux Toolkit", "Next.js"]
    },
];


interface TechMarqueeProps {
    name: string;
    icon: IconType;
    color: string;
}

export const TechMarquee: TechMarqueeProps[] = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind v4", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "Sass", icon: FaSass, color: "#CC6699" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#24292E" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
]
