import myImage from '../images/Super_Capivara.jpg';
import myCV from '../documents/Comparing_evolutionary_and_temporal_diff.pdf';
import Button from "../components/Button";
import {ImFilePdf} from "react-icons/im";

function AboutPage() {
    const aboutText = "Hi, my name is Pedro Silva and I’m a software developer based in Lisbon, Portugal. I hold a" +
        " Master's degree in Artificial Intelligence, and a Bachelor's degree in Game Development, from IADE University. \n\n" +
        "Throughout my academic journey, I’ve worked on various areas of software development, including web and mobile, " +
        "but mostly video game development. I have experience in AI techniques, from classical algorithms to Game AI " +
        "to Deep Learning models, and I’m always looking for new ways to research and develop emergent AI behaviors"

    return (
        <section className="min-h-screen py-10 flex flex-col items-center justify-center bg-milky-way">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-twilight mb-3">About Me</h1>
            </div>
            <div
                className="flex flex-col lg:flex-row mx-4 lg:mx-28 xl:mx-44 items-center lg:items-start gap-10 lg:gap-16">
                <img src={myImage} alt="Myself"
                     className="w-64 h-64 lg:w-72 lg:h-72 rounded-3xl border-2 border-black"/>
                <div className="flex flex-col items-center">
                    <p className="text-lg text-dark-midnight whitespace-pre-line text-justify">
                        {aboutText}
                    </p>
                </div>
            </div>
            <a href={myCV} target="_blank" rel="noopener noreferrer" className="mt-10">
                <Button primary><ImFilePdf/>Download CV</Button>
            </a>
        </section>
    )
}

export default AboutPage;