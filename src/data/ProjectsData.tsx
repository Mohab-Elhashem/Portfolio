import modernDashboardImage from "../assets/modernDashboard.webp"
import socialMedia from "../assets/socialMedia.png"
import dukkanekImage from "../assets/dukkaned.webp"
import Quicstart from "../assets/Quicstart.webp"

interface projectCategoriesProps {
    image: string;
    title: string;
    description: string;
    skills: string[];
    demo: string;
}

export const projectCategories: projectCategoriesProps[] = [
    {
        image: socialMedia,
        title: "'Social Media Web Application'",
        description: "Production-Grade Social Platform: A feature-rich social media application built for optimal performance, featuring instant interactions with Optimistic UI, nested comment threads, real-time notifications, robust authentication, and a seamless Dark/Light mode experience.",
        skills: ["[ 'React.js' ,", "'TypeScript' , ", "'React Router dom', ", "'Zod', ", "'Shadcn UI', ", "'TanStack Query', ", "'Tailwind CSS' ]"],
        demo: "https://social-app-ten-sigma.vercel.app/",
    },
    {

        image: modernDashboardImage,
        title: "'Modern Dashboard'",
        description: "A modern, high-performance admin dashboard built with Next.js 16 (App Router) and TypeScript to deliver seamless server-side rendering and end-to-end type safety. It features a responsive UI styled with Tailwind CSS and Shadcn UI, complete with dynamic Dark/Light mode support. The platform integrates interactive data visualizations via Recharts and sortable data tables using TanStack Table v9. Additionally, it incorporates client-side data persistence, real-time mapping powered by OpenStreetMap/Pigeon Maps, and robust form handling using React Hook Form and Zod.",
        skills: ["[ 'Next.js' ,", "'React.js' , ", "'TypeScript',", " 'Tailwind CSS' , ", "'Zod'", ", 'Shadcn ui' ]"],
        demo: "https://modern-dashboard-gamma.vercel.app/",
    },
    {
        image: dukkanekImage,
        title: "'Dukkanek Store'",
        description: "Developed a high-performance, multi pages, fully responsive digital marketplace application using React and React Router v7.Integrated Clerk Authentication for secure, multi-tier user sign-in, sign-up, and session management.Built a modern, sleek UI using the latest Tailwind CSS v4, implementing interactive elements like touch-responsive",
        skills: ["[ 'React.js' ,", "'react-router', ", "'TypeScript' , ", "'Tailwind CSS'", ", 'Clerk'", ", 'Toastify'", ", 'Location '", ", 'Axios' ]"],
        demo: "https://dukkanek-app-store.vercel.app/",
    },
    {
        image: Quicstart,
        title: "'Modern Hotel & Room Booking Platform'",
        description: "A full-featured, responsive, and type-safe web application designed to seamlessly connect travelers with property owners. QuickStay allows guests to dynamically search, filter, and book accommodations while providing property owners with a robust dashboard to manage listings, track availability, and upload media.",
        skills: ["[ 'React.js' ,", "'TypeScript' , ", "'Tailwind CSS ,'", "'Clerk Auth'", ", 'React Router v7' ]"],
        demo: "https://quick-stay-booking-app.vercel.app/",
    },


];

