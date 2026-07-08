import { SectionHeader } from "./shared/SectionHeader";
import { skillCategories, TechMarquee } from "../data/SkillsData";
import { motion } from "framer-motion";
import { skillCardVariants, skillsContainerVariants, titleRevealVariants } from "./shared/Animation";

export default function Skills() {


    return (
        <motion.section id="skills" className="relative lg:px-6 px-0 md:py-20"
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div
                variants={titleRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full">

                <SectionHeader comment="My professional tech stack and tools" keyword="const" variable="skills">
                    <span> = {"["}</span>
                </SectionHeader>
            </motion.div>

            {/* cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-3 md:pt-10"
                variants={skillsContainerVariants} // الـ الأب بياخد حاوية الـ Stagger
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {
                    skillCategories.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={skillCardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
                                borderColor: "var(--color-keyword)"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="text-center p-3 overflow-hidden text-xs sm:text-sm leading-relaxed text-slate-600 bg-bg-card/20 backdrop-blur-md rounded-2xl border border-slate-200/5 shadow-2xl selection:bg-primary/30 cursor-pointer"
                        >
                            <span className="flex justify-center mb-2">
                                <card.icon className="rounded-xl text-Keyword p-2 w-15 h-15" />
                            </span>

                            <div className="text-Keyword text-2xl font-semibold mb-2">
                                {card.title}
                            </div>

                            <p>{card.description}</p>

                            <div className="flex flex-wrap gap-2 mt-3 text-string font-bold justify-center">
                                {card.skills.map((skill) => (
                                    <span key={skill} className="rounded-xl border border-slate-200/50 px-3 py-1.5 shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
            <div className="pt-10 text-3xl tracking-wider text-slate-500 text-center font-bold mb-10">{"] ;"}</div>

            {/* icons */}
            <div className="w-full py-8 bg-bg-card shadow-xl overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-bg-main to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-bg-main to-transparent z-10 pointer-events-none"></div>
                <div className="flex w-max">
                    <motion.div
                        role="none" aria-hidden="true"
                        className="flex space-x-12 px-10"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                    >
                        {TechMarquee.map((tool, index) => (
                            <div key={`group1-${index}`} className="flex items-center space-x-3 font-mono text-sm font-bold text-Keyword group cursor-pointer">
                                <tool.icon className="w-6 h-6 text-Keyword group-hover:scale-150 transition-all duration-300" style={{ color: `${tool.color}` }} />
                                <span>{"<"}{tool.name}{" />"}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}