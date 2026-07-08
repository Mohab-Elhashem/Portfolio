import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";


export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    name="scroll"
                    onClick={scrollToTop}
                    className="flex items-center justify-center opacity-50 hover:opacity-100 w-12 h-12 text-xl bg-primary fixed right-10 bottom-10 rounded-full cursor-pointer z-50 hover:scale-110 duration-300">
                    <ChevronUp />
                </button>
            )}
        </>
    );
}