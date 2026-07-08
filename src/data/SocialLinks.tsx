import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

interface socialLinkProps {
    href: string;
    icon: IconType;
    title: string;
}

export const socialLinks: socialLinkProps[] = [
    { href: "https://github.com/Mohab-Elhashem", icon: FaGithub, title: "GitHub Profile" },
    { href: "https://linkedin.com/in/mohab-elhashem", icon: FaLinkedinIn, title: "LinkedIn Profile" },
    { href: "https://mail.google.com/mail/?view=cm&fs=1&to=mohabelhashem@gmail.com", icon: FaEnvelope, title: "Email Me" }, 
];