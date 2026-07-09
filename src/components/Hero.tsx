import { ArrowUpRight, Sparkles } from 'lucide-react';
import { socialLinks } from '../data/SocialLinks';
import { HeroInfo } from '../data/HeroInfo';
import Typewriter from 'typewriter-effect';
import { ColorsDot } from './shared/ColorsDot';
import mohamImage from "../assets/mohab.webp"
import { heroCardVariants, heroImageVariants } from "./shared/Animation";
import { motion } from 'motion/react';
import { useState } from 'react';
import Terminal from './Terminal';


export default function Hero() {
    const roleData = HeroInfo.find(item => item.label === "role")?.value;
    const roles = Array.isArray(roleData) ? roleData : ["\"Front-End Developer\""];

    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    return (

        <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden lg:px-6 px-0 py-20 md:py-20">
            {/* Ambient Glow in back */}
            <div className="absolute top-1/4 left-1/4 -z-10 h-75 w-75 rounded-full bg-primary/10 blur-[120px] sm:h-100 sm:w-100" />

            <div className="mx-auto flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-8 w-full">
                {/* projects btn */}
                <a
                    href="#projects"
                    className="md:hidden w-full group flex items-center justify-center gap-1 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-bg-main shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30 active:scale-105"
                >
                    <span className='md:none'>Explore</span> Projects
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* image */}
                <motion.div
                    className="flex gap-x-5 w-full md:flex-col justify-center flex-row items-center lg:w-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={heroImageVariants}
                >
                    <div className="relative group">
                        {/* image Hover */}
                        <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-primary to-indigo-500 opacity-30 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />
                        {/* image container */}
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200/10 bg-bg-card shadow-2xl sm:h-80 sm:w-100">
                            <img
                                fetchPriority="high"
                                loading='eager'
                                src={mohamImage}
                                alt="Mohab Elsayed"
                                className="h-[140%] w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
                            />
                        </div>
                        {/* image overlay*/}
                        <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-lg border border-slate-200/10 bg-bg-card px-3 py-1.5 shadow-xl backdrop-blur-md">
                            <Sparkles role="none" aria-hidden="true" className="h-3.5 w-3.5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                            <span className="text-xs font-medium text-text-main">Open to Work</span>
                        </div>
                    </div>
                    {/* link buttons */}
                    <div className="mt-8 flex flex-col md:flex-row items-center gap-4 ">
                        {
                            socialLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        title={item.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl border border-slate-200/10 bg-bg-card/50 p-2.5 text-text-main/80 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary active:scale-95"
                                    >
                                        <Icon className='h-5 w-5' />
                                    </a>
                                )
                            })
                        }
                        <a
                            href="#projects"
                            className="w-full group md:flex hidden items-center justify-center gap-1 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-bg-main shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30 active:scale-105"
                        >
                            <span className='md:none'>Explore</span> Projects
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </motion.div>

                {/* content */}
                <motion.div className="w-full max-w-170"
                    initial="hidden"
                    animate="visible"
                    variants={heroCardVariants}>
                    <div className="w-full rounded-2xl border border-slate-200/10 bg-bg-card shadow-2xl text-sm leading-relaxed overflow-hidden font-bold tracking-wider">

                        {/* colors dots */}
                        <ColorsDot>NewDeveloper.tsx</ColorsDot>
                        {/* information */}
                        <div className="p-3 sm:p-5 overflow-hidden text-left text-xs sm:text-sm leading-relaxed text-slate-600 bg-bg-card/20 backdrop-blur-md border border-slate-200/5 shadow-2xl selection:bg-primary/30">
                            {/* comment */}
                            <p className='text-slate-500 mb-4 italic whitespace-pre-line'>
                                {`/*
                                        @description=> Junior Front-End Developer with a solid foundation in building responsive, user-friendly web apps, highly focused on clean, maintainable code.
                                        @stack=> React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit.
                                    */`}
                            </p>
                            <div className="mb-1">
                                <span className="text-Keyword">class</span> <span className="text-function">FrontendDeveloper</span> {"{"}
                            </div>
                            {HeroInfo.map((detail) => (
                                <div key={`prop-${detail.label}`} className="pl-4 my-0.5">
                                    <span className="text-variable">{detail.label}</span>:{" "}
                                    <span className="text-Keyword">{detail.type}</span>;
                                </div>
                            ))}
                            <div className="pl-4 mt-3 mb-1">
                                <span className="text-Keyword">constructor</span>() {"{"}
                            </div>
                            {HeroInfo.map((detail) => {
                                const isRole = detail.label === "role";
                                return (
                                    <div key={`const-${detail.label}`} className="pl-8 my-1 whitespace-pre-wrap wrap-break-word flex items-center flex-wrap">
                                        <span className="text-Keyword">this</span>.
                                        <span className="text-variable">{detail.label}</span> ={" "}
                                        {isRole ? (
                                            <div className={`${detail.color} inline-flex max-w-44`}>
                                                <Typewriter
                                                    options={{
                                                        strings: roles,
                                                        autoStart: true,
                                                        loop: true,
                                                        delay: 80,
                                                        deleteSpeed: 40,
                                                        wrapperClassName: detail.color,
                                                        cursorClassName: "text-primary font-bold"
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <span className={detail.color}>{detail.value}</span>
                                        )}
                                    </div>
                                );
                            })}
                            <div className="pl-4 my-1">{"}"}</div>
                            <div className="mb-3">{"}"}</div>
                            <div className="whitespace-pre-wrap wrap-break-word border-t border-slate-800/50 pt-3">
                                <span className="text-Keyword">const</span> <span className="text-variable  ">mohab</span> ={" "}
                                <span className="text-Keyword">new</span> <span className="text-function">FrontendDeveloper</span>();
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* terminal button */}
            <button
                onClick={() => setIsTerminalOpen(true)}
                className="fixed bottom-3 left-3 bg-gray-800 hover:bg-gray-700 text-green-400 p-4 rounded-full border border-green-500/30 shadow-lg transition-all duration-300 flex items-center justify-center group z-48 opacity-50 hover:opacity-100 hover:scale-105"
                title="Open Terminal"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <span className="absolute left-16 bg-gray-950 text-xs px-2 py-1 rounded border border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Interactive Terminal
                </span>
            </button>
            {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
                
        </section>
    );
}