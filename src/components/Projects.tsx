import { motion } from "framer-motion";
import { projectCategories } from "../data/ProjectsData";
import { SectionHeader } from "./shared/SectionHeader";
import { projectsContainerVariants, projectCardVariants, titleRevealVariants } from "./shared/Animation";

function Projects() {
    return (
        <section id="projects" className="relative pt-10 md:pt-15">
            <motion.div
                variants={titleRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full">
                <SectionHeader comment="Selected Projects" keyword="function" variable="viewProjects">
                    <span>{"() {"}</span>
                </SectionHeader>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-10"
                variants={projectsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {
                    projectCategories.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={projectCardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.15)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="group overflow-hidden leading-relaxed text-slate-600 bg-bg-card/20 backdrop-blur-md rounded-2xl border border-slate-200/5 shadow-2xl hover:border-Keyword duration-300 selection:bg-primary/30 cursor-pointer"
                        >
                            <div className="max-h-75 w-full overflow-hidden relative">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                    className="relative bottom-0 w-full group-hover:-translate-y-[calc(100%-300px)] duration-1000 cursor-ns-resize"
                                />
                            </div>

                            <div className="p-5">
                                <motion.button
                                    name="demo"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-primary rounded-xl overflow-hidden w-full mb-2"
                                >
                                    <a
                                        href={card.demo}
                                        target="_blank"
                                        aria-label={card.title}
                                        className="px-3 py-2 text-bg-main text-xl font-semibold w-full inline-block"
                                    >
                                        Live Demo
                                    </a>
                                </motion.button>

                                <div className="text-string text-2xl font-semibold mb-2">
                                    <span className="text-Keyword ">const </span>
                                    <span className="text-variable">project </span>
                                    <span>{"= "}</span>
                                    <span className="text-xl">{card.title}</span>
                                </div>

                                <p>{"/*"}<br />{card.description}<br />{"*/"}</p>

                                <div className="mt-3 text-string font-bold">
                                    <div>{card.skills}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>

            <div className="pt-10 text-3xl tracking-wider text-slate-500 text-center font-bold mb-10">{"} ;"}</div>
        </section>
    );
}

export default Projects;