import {useState} from "react";
import {Link, animateScroll} from "react-scroll"
import CVpdf from "../documents/Comparing_evolutionary_and_temporal_diff.pdf";
import {ImFilePdf} from "react-icons/im";

function NavBar({sections}) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavHome = () => {
        animateScroll.scrollToTop({smooth: true, duration: 400});
        setIsNavOpen(false);
    }
    const handleNavElement = () => setIsNavOpen(false)

    const renderedMenuElements = sections.map((section) => {
        return <Link key={section.id}
                     className="cursor-pointer hover:underline underline-offset-2 decoration-2 decoration-amber-400"
                     activeClass="underline" to={section.id} spy={true} smooth={true} offset={-56} duration={400}
                     onClick={handleNavElement}>{section.name}</Link>
    })

    const renderedResumeElement = <a
        className="flex items-center gap-x-0.5 cursor-pointer hover:underline underline-offset-2 decoration-2 decoration-amber-400"
        href={CVpdf}
        target="_blank" rel="noopener noreferrer">
        <ImFilePdf/>
        Resume
    </a>

    return (
        <nav className="bg-blue-500 text-white flex flex-col py-3 px-6 fixed w-full top-0 z-10">
            <div className="flex justify-between">
                <h1 className="cursor-pointer text-2xl font-bold hover:text-gray-200 transition duration-200"
                    onClick={handleNavHome}>Home</h1>
                <div className="space-y-2 md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <span className="block h-0.5 w-8 bg-gray-800"></span>
                    <span className="block h-0.5 w-8 bg-gray-800"></span>
                    <span className="block h-0.5 w-8 bg-gray-800"></span>
                </div>
                <ul className="hidden md:flex space-x-4 uppercase items-center">
                    {renderedMenuElements}
                    {renderedResumeElement}
                </ul>
            </div>
            <div
                className={`duration-300 ease-in-out ${isNavOpen ? 'max-h-52' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <ul className="md:hidden flex flex-col space-y-2 p-4 uppercase">
                    {renderedMenuElements}
                    {renderedResumeElement}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;