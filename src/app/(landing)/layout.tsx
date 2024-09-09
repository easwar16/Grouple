import LandingPageNavbar from "./_components/navbar"

type Props = {}
function LandingPagelayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col container relative">
            <LandingPageNavbar />
            {children}
        </div>
    )
}

export default LandingPagelayout
