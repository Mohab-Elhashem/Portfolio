import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from 'react-toastify';

export default function Footer() {

    const [likes, setLikes] = useState(127)
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        if (!isLiked) {
            setLikes(likes + 1)
            toast.success("Thank you for your support.")
        } else {
            setLikes(likes - 1)
            toast.error("What are your comments?")
        }
        setIsLiked(!isLiked);
    }
    return (
        <section id="footer" className="py-10 px-3 text-center bg-footer">
            <div className="flex items-center gap-5 flex-col text-slate-400">
                <p>{"// "}And finally if you liked this portfolio, you can give it a heart.</p>
                <button
                    aria-label="Like this portfolio"
                    name="like"
                    onClick={handleLikeClick}
                    className="focus:outline-none transform active:scale-90 transition-transform">
                    <Heart className={`cursor-pointer w-15 h-15 p-2 border rounded-full transition-colors duration-300 ${isLiked ? 'text-function fill-function' : 'text-slate-500 hover:text-function'}`} />
                </button>
                <span className="text-variable">{"[ "}Hearts : <span>{likes}</span>{" ]"}</span>
                <div>{'{ " '}devoloped_by {'" '} : {'" '} Mohab Elsayed {'" }'}</div>
            </div>
        </section>
    )
}
