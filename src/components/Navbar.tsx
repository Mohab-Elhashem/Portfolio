import { Check, Download, Palette } from "lucide-react";
import { NavItems } from "../data/Navdata";
import { useTheme, type ThemeType } from "../hooks/useTheme";
import { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { motion } from "framer-motion";
import { navbarVariants } from "./shared/Animation";

const themeOptions: { id: ThemeType; label: string; preview: string }[] = [
    { id: "dark", label: "Midnight (Dark)", preview: "bg-[#090d16]" },
    { id: "light", label: "Snow (Light)", preview: "bg-[#f8fafc] border border-slate-300" },
    { id: "cyberpunk", label: "Cyberpunk", preview: "bg-[#030712] border border-[#00f5d4]" },
];

export default function Navbar() {
    const [theme, setTheme] = useTheme();
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    return (
        <motion.header 
        className="fixed top-0 left-0 right-0 z-49 w-full bg-bg-main/80 backdrop-blur-md border-b border-slate-200/5 shadow-lg selection:bg-primary/20"
        variants={navbarVariants}
        animate="visible"
        initial="hidden"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 lg:px-6">
                {/* logo */}
                <div className="flex items-center gap-0.5 font-mono text-xl font-bold tracking-tight select-none">
                    <span className="text-primary transition-colors duration-300">&lt;</span>
                    <span
                        style={{ backgroundImage: 'var(--gradient-logo)' }}
                        className="bg-clip-text text-transparent transition-all duration-500 bg-size-200"
                    >
                        Mohab
                    </span>
                    <span className="text-primary transition-colors duration-300">/&gt;</span>
                    <motion.span 
                    className="text-primary animate-terminal-blink"
                    animate={{opacity: [0, 1, 0]}}
                    transition={{duration: 1, ease:"linear",repeat:Infinity}}
                    >_</motion.span>
                </div>
                {/* links */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-2">
                        {NavItems.map((item) => {
                            const targetId = item.href.replace('#', '');
                            return (
                                <li key={item.href}>
                                    <ScrollLink
                                        to={targetId}
                                        href={item.href}
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        className="relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-text-main/70 capitalize transition-colors duration-300 hover:text-primary 
                                                    after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 after:ease-in-out 
                                                    hover:after:w-[calc(100%-2rem)]"
                                        activeClass="!text-primary after:!w-[calc(100%-2rem)]"
                                    >
                                        {item.label}
                                    </ScrollLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                {/* theme */}
                <div className="flex items-center gap-5">
                    <div className="relative">
                        <button
                            name="drop button"
                            onClick={() => setShowDropdown(!showDropdown)}
                            type="button"
                            className="flex items-center gap-2 rounded-lg p-2 text-text-main/80 transition-all hover:bg-primary/10 hover:text-primary active:scale-95 cursor-pointer"
                            title="Change Theme"
                        >
                            <Palette className="h-5 w-5" />
                            <span className="hidden sm:inline text-xs font-medium capitalize">{theme}</span>
                        </button>
                        {/* dropdown theme*/}
                        {showDropdown && (
                            <>
                                {/* close dropdown when onclick in anywhere*/}
                                <div className="fixed inset-0 z-10" onClick={() => setShowDropdown(false)} />
                                <div className="absolute right-0 mt-2 z-20 w-48 rounded-xl border border-slate-200/10 bg-bg-card p-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                                    {themeOptions.map((option) => (
                                        <button
                                            name="theme button"
                                            key={option.id}
                                            onClick={() => {
                                                setTheme(option.id);
                                                setShowDropdown(false);
                                            }}
                                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-primary/10 ${theme === option.id ? "text-primary" : "text-text-main/80"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span className={`h-3 w-3 rounded-full ${option.preview}`} />
                                                {option.label}
                                            </div>
                                            {theme === option.id && <Check className="h-4 w-4 text-primary" />}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    {/* download cv */}
                    <a href="/Mohab-Elsayed-CV.pdf" download="/Mohab-Elsayed-CV.pdf"
                        className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-bg-main shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30 active:scale-105">
                        <Download className="h-4 w-4" />
                        <span>CV</span>
                    </a>
                </div>
            </div>
        </motion.header>
    )
}
