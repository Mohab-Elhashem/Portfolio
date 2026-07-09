// animations.ts
import { type Variants } from "framer-motion";



// header
export const navbarVariants: Variants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
        }
    }
};
// image
export const heroImageVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};
// hero content
export const heroCardVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 120,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};
// skills cards container
export const skillsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};
// skills cards
export const skillCardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: [0.25, 1, 0.5, 1]
        }
    },
};

// projects
export const projectsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

export const projectCardVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
        }
    },
};
// section header
export const titleRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 1, 0.5, 1]
        }
    }
};

// contact
export const contactLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5,
            ease: [0.16, 1, 0.3, 1],
        }
    }
};

export const contactRightVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5,
            ease: [0.16, 1, 0.3, 1],
        }
    }
}