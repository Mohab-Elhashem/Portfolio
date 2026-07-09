import React, { useState, useRef, useEffect } from "react";

const Commands: Record<string, string | string[]> = {
    help: [
        "help        - Show this help message",
        "about       - Display bio and information",
        "skills      - Display technical skills",
        "projects    - List all projects",
        "contact     - Show contact information",
        "clear       - Clear terminal screen",
        "exit        - Close terminal",
        " ",
        "--- Fun Commands ---",
        " ",
        "sudo        - Try it and see ",
        "hack        - Initiate hacking sequence",
        "coffee      - Get some coffee",
        "joke        - Random programming joke",
    ],
    about: [
        "╔══════════════════════════════════════════════════════════════╗",
        "               Mohab Elsayed - Front-End Developer              ",
        "╚══════════════════════════════════════════════════════════════╝",
        " ",
        "About Me:",
        "  Junior Front-End Developer with a solid foundation in building responsive, user-friendly web applications. ",
        "  Highly focused on writing clean, maintainable code, Experienced in modern front-end workflows, responsive design, and version control",
        "   Eager to bring my technical skills in React and Next.js to a dynamic development team and problem-solving mindset to a dynamic development team where I can contribute to impactful projects and continuously grow.",
        " ",
        "Focus Areas:",
        "  • Frontend: React, JavaScript, TypeScript",
        "  • UI/UX: Tailwind CSS, Bootstrap 5",
        "  • Tools: Git, GitHub",
        " ",
        "Interests:",
        "  Web Development, UI/UX Design, Problem Solving",
        " ",
        "Type 'skills' to see my technical stack",
    ],
    skills: [
        "╔══════════════════════════════════════╗",
        "                  Skills                   ",
        "╚══════════════════════════════════════╝",
        "  -- Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3.",
        "  -- Styling & UI: CSS3, Tailwind CSS, Sass, Bootstrap.",
        "  -- Libraries & Frameworks: React.js, Next.js, Redux / Redux Toolkit.",
        "  -- Tools & Version Control: Git, GitHub.",
        " ",
        "  Type 'projects' to see my projects.",
    ],
    projects: [
        " ",
        "╔══════════════════════════════════════════════════════════════╗",
        "                       Available Projects:                      ",
        "╚══════════════════════════════════════════════════════════════╝",
        " ",
        "  1. e-commerce   - Full digital marketplace application",
        "  2. dashboard    - High-performance analytics panel",
        "  3. ai-boost     - Modern AI Business Solutions landing page",
        " ",
        "Type 'contact' to contact with me."
    ],
    contact: [
        "╔══════════════════════════════════════════════════════════════╗",
        "                       Contact Information                      ",
        "╚══════════════════════════════════════════════════════════════╝",
        " ",
        "Email:",
        "  mohabelhashem@gmail.com",
        " ",
        "GitHub:",
        "  https://github.com/Mohab-Elhashem",
        " ",
        "LinkedIn:",
        "  https://www.linkedin.com/in/mohab-elhashem",
        " ",
        "Let's connect! Feel free to reach out for:",
        "  • Job opportunities",
        "  • Collaboration on projects",
        "  • Technical discussions",
        "  • Freelance work",
        " ",
        "Let's go to fun command and start with 'sudo'"
    ],
    sudo: ["🔒 Error: User is not in the file. This incident will be reported... to nobody 😉",
        "Type 'hack' to view next fun command"
    ],
    hack: ["Just Kidding! This is a portfolio 😂",
        "Type 'coffee' to view next fun command"
    ],
    coffee: [
        " ",
        "    (  (",
        "     )  )",
        "   ........",
        "   |      |#",
        "   \\      /",
        "    `----'",
        " ",
        "☕ Coffee break!. Oh remove your hand it's very hot 😂",
        "Type 'joke' to view next fun command"
    ],
    joke: ["Why do software developers use dark themes?",
        "Because bugs are attracted to the light.",
        "I'm sorry 😂",]
    ,
    clear: "",
};

interface TerminalProps {
    onClose: () => void;
}

export default function Terminal({ onClose }: TerminalProps) {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([
        "Welcome to Mohab's Portfolio Terminal v1.0.0",
        "Type 'help' to see available commands.",
        "",
    ]);

    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = input.trim().toLowerCase();

        if (!trimmedInput) return;

        if (trimmedInput === "clear") {
            setHistory([]);
            setInput("");
            return;
        }
        if (trimmedInput === "exit") {
            setInput("");
            onClose();
            return;
        }

        const commandResult = Commands[trimmedInput];
        let newLines: string[] = [`mohab@portfolio:~$ ${input}`];

        if (commandResult) {
            if (Array.isArray(commandResult)) {
                newLines = [...newLines, ...commandResult];
            } else {
                newLines.push(commandResult);
            }
        } else {
            newLines.push(`Command not found: '${trimmedInput}'. Type 'help' for options.`);
        }

        setHistory((prev) => [...prev, ...newLines]);
        setInput("");
    };

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center z-50 sm:p-10 p-3">
            {/* terminal window */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col w-full max-w-6xl h-[90vh] bg-gray-950 border border-gray-800 rounded-lg shadow-2xl font-mono text-sm text-green-400 overflow-hidden">

                {/* header */}
                <header className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800 select-none">
                    <span className="text-gray-400 text-xs">mohab@terminal:~</span>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full block"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full block"></span>
                        <span className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 block" onClick={onClose}></span>
                    </div>
                </header>

                {/* content */}
                <div
                    onClick={handleTerminalClick}
                    className="p-1 sm:p-5 overflow-y-auto overflow-x-clip flex-1 space-y-2 select-none text-xs sm:text-lg" onContextMenu={(e) => e.preventDefault()}>
                    {history.map((line, index) => (
                        <div key={index} className="whitespace-pre-wrap">
                            {line.startsWith("mohab@portfolio:~$") ? (
                                <span className="text-blue-400">{line}</span>
                            ) : (
                                <span>{line}</span>
                            )}
                        </div>
                    ))}
                    <form onSubmit={handleCommand} className="flex items-center mt-2">
                        <span className="text-blue-400 mr-2">mohab@portfolio:~$</span>
                        <input
                            type="text"
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-green-400 focus:ring-0 p-0 m-0"
                            autoFocus
                        />
                    </form>
                    <div ref={bottomRef} />
                </div>

            </div>
        </div>
    );
}