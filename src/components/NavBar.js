import {useEffect, useState} from "react";
import {Link, animateScroll} from "react-scroll"
import CVpdf from "../documents/Resume.pdf";
import {ImFilePdf} from "react-icons/im";

function NavBar({sections}) {
    const [scrollPositionTop, setScrollPositionTop] = useState(true);
    const handleScroll = () => {
        setScrollPositionTop(window.scrollY < 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavHome = () => {
        animateScroll.scrollToTop({smooth: true, duration: 400});
        setIsNavOpen(false);
    }
    const handleNavElement = () => setIsNavOpen(false);

    const renderedMenuElements = sections.map((section) => {
        return <Link key={section.id}
                     className="cursor-pointer transition duration-200 text-milky-way hover:text-tangerine"
                     activeClass="text-tangerine" to={section.id} spy={true} smooth={true} offset={-56} duration={400}
                     onClick={handleNavElement}>{section.name}</Link>
    })

    const renderedResumeElement = <a
        className="flex items-center gap-x-0.5 cursor-pointer transition duration-200 text-milky-way hover:text-tangerine"
        href={CVpdf} target="_blank" rel="noopener noreferrer">
        <ImFilePdf/>
        Resume
    </a>

    return (
        <nav
            className={`flex flex-col py-3 px-4 md:px-20 lg:px-32 fixed w-full top-0 z-10 bg-dark-midnight md:duration-300 md:ease-in-out ${scrollPositionTop ? 'md:bg-opacity-0' : ''} `}>
            <div className="flex justify-between">
                <h1 className="cursor-pointer text-2xl md:text-3xl font-bold transition duration-200 text-tangerine hover:text-dark-tangerine"
                    onClick={handleNavHome}>Home
                </h1>
                <div className="space-y-2 md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <span className="block h-0.5 w-8 bg-milky-way"></span>
                    <span className="block h-0.5 w-8 bg-milky-way"></span>
                    <span className="block h-0.5 w-8 bg-milky-way"></span>
                </div>
                <ul className="hidden md:flex space-x-4 uppercase items-center">
                    {renderedMenuElements}
                    {renderedResumeElement}
                </ul>
            </div>
            <div
                className={`duration-300 ease-in-out ${isNavOpen ? 'max-h-52' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <ul className={`md:hidden flex flex-col space-y-2 p-3 uppercase ease-in-out ${isNavOpen ? 'duration-1000 opacity-100' : 'duration-100 opacity-0'}`}>
                    {renderedMenuElements}
                    {renderedResumeElement}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;