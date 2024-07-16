import backgroundImage from '../images/lisbon-1.jpg';
import profileImage from "../images/Batman_Capivara.jpg";
import {SlArrowDown} from "react-icons/sl"
import Button from "../components/Button";
import {Link} from "react-scroll";

function HomePage({firstSectionId}) {
    return (
        <div
            className="min-h-screen py-10 flex flex-col items-center justify-center bg-cover bg-center bg-fixed bg-blend-overlay bg-dark-midnight bg-opacity-60 text-milky-way"
            style={{backgroundImage: `url(${backgroundImage})`}}>
            <img className="h-48 md:h-56 mb-4 rounded-full border-4 border-milky-way" src={profileImage} alt="Profile"/>
            <h1 className="text-center text-4xl font-bold text-tangerine">Pedro Silva</h1>
            <p className="text-center mt-2 text-lg text-milky-way font-bold">Software Engineer | Game Developer | AI/DL
                Researcher</p>
            <Link to={firstSectionId} spy={true} smooth={true} offset={-56} duration={400}>
                <Button rounded
                        className="mt-2 border-gray-400 text-gray-400 hover:border-gray-50 hover:text-gray-50">
                    <SlArrowDown className="text-3xl"/>
                </Button>
            </Link>
        </div>);
}

export default HomePage;