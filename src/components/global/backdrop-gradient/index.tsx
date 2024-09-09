import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode
    container?: string
    className?: string
}

const BackDropGradient = ({ children, container, className }: Props) => {
    return (
        <div className={cn("relative w-full flex flex-col", container)}>
            <div
                className={cn(
                    "absolute rounded-[50%] radial--blur mx-10",
                    className,
                )}
            />
            {children}
        </div>
    )
}

export default BackDropGradient
