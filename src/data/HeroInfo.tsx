interface HeroInfoProps{
    label: string;
    value: string | string[];
    color: string;
    type: string;
}

export const HeroInfo: HeroInfoProps[] = [
        { label: "name",type: "string", value: '"Mohab Elhashem";', color: "text-string" },
        { label: "role",type: "string | string[]", value: ['"Front-End Developer";', '"React Specialist";', '"Next.js Developer";'], color: "text-string" },
        { label: "location",type: "string", value: '"Zagazig, Egypt";', color: "text-string" },
        { label: "stack",type: "string[]", value: '["React", "TypeScript", "Next.js", "Tailwind"];', color: "text-string"},
    ];
