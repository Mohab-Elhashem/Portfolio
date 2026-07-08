import { SendHorizonal } from "lucide-react"
import { socialLinks } from "../data/SocialLinks"
import { ColorsDot } from "./shared/ColorsDot"
import { SectionHeader } from "./shared/SectionHeader"
import { contactLeftVariants, contactRightVariants, titleRevealVariants } from "./shared/Animation"
import { motion } from "motion/react"

function Contact() {
    return (
        <section id="contact" className="py-10">
            <motion.div
                variants={titleRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full">
                <SectionHeader comment="Let's Connect" keyword="async function" func="sendMsg">
                    <span>{"("}</span>
                    <span className="text-variable">data</span>
                    <span>{") {"}</span>
                </SectionHeader>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 lg:mx-20 mx-0">
                {/* social */}
                <motion.div
                    variants={contactLeftVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="rounded-2xl border border-slate-200/10 bg-bg-card shadow-xl text-sm overflow-hidden font-bold hover:translate-y-2 hover:border-Keyword transition-all duration-300">
                    <ColorsDot>{"// Social.tsx"}</ColorsDot>
                    <div className="text-slate-600 p-5 text-2xl font-semibold">
                        <div>
                            <span className="text-Keyword">interface </span>
                            <span className="text-variable">socialProps </span>
                            <span>{"{"}</span>
                            <div className="px-5 py-2">
                                <span className="text-variable">href: </span>
                                <span className="text-Keyword">string ;</span>
                            </div>
                            <div className="px-5 py-2">
                                <span className="text-variable">icon: </span>
                                <span className="text-Keyword">IconType ;</span>
                            </div>
                            <div className="px-5 py-2">
                                <span className="text-variable">title: </span>
                                <span className="text-Keyword">string ;</span>
                            </div>
                            <span>{"}"}</span>
                        </div>
                        <span className="text-Keyword">const </span>
                        <span className="text-variable">social </span>
                        <span>{"= {"}</span>
                        {
                            socialLinks.map((item) => (
                                <a key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 pt-8 cursor-pointer px-5 w-fit hover:translate-x-3 hover:text-string duration-300">
                                    <item.icon />
                                    <div className="text-xl">{item.title}</div>
                                </a>
                            ))
                        }
                    </div>
                </motion.div>
                {/* message */}
                <motion.div
                    variants={contactRightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="rounded-2xl border border-slate-200/10 bg-bg-card shadow-xl text-sm overflow-hidden font-bold hover:translate-y-2 hover:border-Keyword transition-all duration-300">
                    <ColorsDot>{"// Message.tsx"}</ColorsDot>
                    <form className="text-slate-600 p-8 text-2xl font-semibold flex flex-col space-y-15">
                        <div className="flex items-center">
                            <label htmlFor="name" className="w-15 inline-block text-variable">name:</label>
                            <input type="text" id="name" placeholder="Your Name" className="border-b ms-3 w-full outline-0 placeholder:text-lg" />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="email" className="w-15 inline-block text-variable">email:</label>
                            <input type="email" id="email" placeholder="your@email.com" className="border-b ms-3 w-full outline-0 placeholder:text-lg" />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="msg" className="w-15 inline-block text-variable">msg:</label>
                            <textarea name="msg" rows={1} id="msg" placeholder="Hello, I'd like to work with you ..." className="border-b ms-3 w-full outline-0 placeholder:text-lg"></textarea>
                        </div>
                        <button type="submit" name="submit" className="flex gap-3 items-center justify-center cursor-pointer rounded-xl bg-primary px-4 py-3 text-lg font-semibold text-bg-main shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30 active:scale-105">
                            <span>Send</span>
                            <SendHorizonal className="rotate-300" />
                        </button>
                    </form>
                </motion.div>
            </div>

            <div className="text-slate-600 text-3xl font-bold w-full text-center pt-10">{"}"}</div>
        </section>
    )
}

export default Contact