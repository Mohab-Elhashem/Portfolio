interface sectionHeaderProps {
    comment: string;
    keyword: string;
    variable?: string;
    func?: string;
    children?: React.ReactNode;
}

export const SectionHeader = ({ comment, variable, keyword, children, func }: sectionHeaderProps) => {
    return (
        <header className="max-w-xl mx-auto text-center text-slate-600 font-bold mb-5">
            <div className="text-slate-500 text-sm sm:text-2xl">{"//"} {comment}</div>
            <h2 className="text-3xl tracking-wider">
                <span className="text-Keyword">{keyword} </span>
                <span className="text-variable">{variable}</span>
                <span className="text-function">{func}</span>
                {children}
            </h2>
        </header>
    )
}

