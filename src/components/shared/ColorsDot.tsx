interface colorsDotProps {
    children: React.ReactNode;
}

export const ColorsDot = ({ children }: colorsDotProps) => {
    return (
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-3 border-b border-slate-200/5">
            <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs text-slate-400 flex items-center gap-1">{children}</span>
        </div>
    )
}

