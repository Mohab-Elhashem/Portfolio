import landingImage from "../assets/landingPageLight.webp"
import dashboardImage from "../assets/dashboardDark.webp"
import dukkanekImage from "../assets/dukkaned.webp"

interface projectCategoriesProps {
    image: string;
    title: string;
    description: string;
    skills: string[];
    demo: string;
}

export const projectCategories: projectCategoriesProps[] = [
    {
        image: dukkanekImage,
        title: "'Dukkanek Store'",
        description: "Developed a high-performance, multi pages, fully responsive digital marketplace application using React and React Router v7.Integrated Clerk Authentication for secure, multi-tier user sign-in, sign-up, and session management.Built a modern, sleek UI using the latest Tailwind CSS v4, implementing interactive elements like touch-responsive",
        skills: ["[ 'React' ,", "'react-router', ", "'TypeScript' , ", "'Tailwind CSS'", ", 'Clerk'", ", 'Toastify'", ", 'Location '", ", 'Axios' ]"],
        demo: "https://dukkanek-app-store.vercel.app/",
    },
    {
        image: landingImage,
        title: "'Landing Page'",
        description: "Developed a modern, type-safe landing page for an AI agency designed to showcase artificial intelligence solutions using React, Typescript, and Tailwind CSS.Optimized bundling and performance using Vite, and deployed the live app via Vercel through GitHub.",
        skills: ["[ 'React' ,", "'TypeScript' , ", "'Tailwind CSS ,'","'tsparticles'", ", 'Redux Toolkit' ]"],
        demo: "https://modern-landing-page-sable-omega.vercel.app/",
    },
    {
        image: dashboardImage,
        title: "'Admin Dashboard'",
        description: "Developed a high-performance, responsive analytics dashboard using React, Vite, and TypeScript for absolute type safety.Implemented interactive, data-driven charts and metrics utilizing Recharts to visualize complex data structures.Engineered a fully responsive layout with seamless Dark/Light mode toggling using Tailwind CSS.Focused on clean code architecture and optimized asset bundling for rapid loading times.",
        skills: ["[ 'React' ,", "'TypeScript' , ", "'Recharts', ", "'Tailwind CSS' ]"],
        demo: "https://admin-dashboard-beta-self-17.vercel.app/",
    },
];

