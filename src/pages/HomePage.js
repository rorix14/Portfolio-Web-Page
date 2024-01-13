import backgroundImage from '../images/Lisbon-Skyline-small.jpg';
import profileImage from "../images/Batman_Capivara.jpg";
import {SlArrowDown} from "react-icons/sl"
import Button from "../components/Button";

function HomePage() {
    return (
        <div
            className="min-h-screen py-10 flex flex-col items-center justify-center bg-cover bg-center bg-fixed bg-blend-overlay bg-black bg-opacity-60 text-white"
            style={{backgroundImage: `url(${backgroundImage})`}}>
            <img className="w-48 h-48 mb-4 rounded-full border-4 border-white" src={profileImage} alt="Profile"/>
            <h1 className="text-center text-4xl font-bold">Pedro Silva</h1>
            <p className="text-center mt-2 text-lg">Software Engineer | Game Developer | AI/DL Researcher</p>
            <Button rounded
                className="mt-2 border-gray-400 text-gray-400 hover:border-gray-50 hover:text-gray-50">
                <SlArrowDown className="text-3xl"/>
            </Button>
        </div>);
}

export default HomePage;