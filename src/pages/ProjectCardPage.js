import ProjectCard from "../components/ProjectCard";
import {useState} from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import {Tooltip} from "react-tooltip";

function ProjectCardPage({projectsList}) {
    const [currentProjectIndex, setProjectIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleClick = (index) => {
        setShowModal(true);
        setProjectIndex(index);
    };

    const handleClose = () => {
        setShowModal(false);
    };
//I'm working on a website using node.js and react.js, In need to create an element that displays a text then a link. The end result should loo like this "View this project on GitHub: https://the_link.com".
    // The link part should have a blue color and an underline (as per usual), and the rest of the text should be in bold. Please use the Tailwind CSS library for the styling.
    /*<iframe width="560" height="315" src={projectsList[currentProjectIndex].trailer}
             title="YouTube video player" frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>*/

    const currentProject = projectsList[currentProjectIndex];
    const modal = <Modal onClose={handleClose}
                         actionBar={<Button primary onClick={handleClose}>Close</Button>}>
        <h3 className="text-lg font-bold mb-2.5 text-center">{currentProject.title}</h3>
        <iframe className="aspect-video"
                src={currentProject.trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
        <p>{currentProject.summary}</p>
        <div className="text-center">
            <b>View this project on GitHub: </b>
            <a href={currentProject.gitRepo} target="_blank" rel="noopener noreferrer"
               className="text-blue-600 hover:underline underline-offset-2">{currentProject.gitRepo}</a>
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="font-bold">Tech used:</p>
            <div
                className={`grid grid-cols-${currentProject.tech.length > 6 ? 6 : currentProject.tech.length} gap-3 md:gap-5`}>
                {currentProject.tech.map((skill, index) => {
                        return <img src={skill.imageLogo} alt={skill.name} className="w-9 h-9 md:w-12 md:h-12"
                                    data-tooltip-id="my-tooltip" data-tooltip-content={skill.name}/>;
                    }
                )}
            </div>
        </div>
        <Tooltip id="my-tooltip" style={{fontSize: "1.125rem", lineHeight: "1.75rem"}}/>
    </Modal>

    const renderedProjectCards = projectsList.map((project, index) => {
        // return <div key={index} className='sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2'><ProjectCard project={project}/></div>
        return <ProjectCard key={project.title} project={project} onClick={() => handleClick(index)}/>
    })

    //<div className='flex flex-wrap mx-8 my-8'>{renderedProjectCards}</div>
    //justify-items-center scale-50
    return (
        <div className='min-h-screen py-10 bg-zinc-200'>
            <div className="flex flex-col items-center justify-center mb-10">
                <h1 className="text-4xl font-bold">University Projects</h1>
                <p className="mt-2 text-lg">A small description about the projects</p>
            </div>
            <div
                className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 sm:w-3/5 md:w-3/5 lg:w-2/3">
                {renderedProjectCards}
            </div>
            {showModal && modal}
        </div>
    )
}

//TODO: if we want to do an animation on the modal the modal must always be on the screen '{modal}' the animation simply controls the opacity,
// also the showModal bool must be passed into the Modal component to inform the animation on what to do.
// EX from chat gpt (bing also has another untested example):
// <div
//       onClick={handleClose}
//       className={`fixed inset-0 flex items-start justify-center bg-gray-300 bg-opacity-80 overflow-auto py-12 px-3.5 ${
//         isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}>
// <div onClick={(event) => event.stopPropagation()}
//         className={`bg-white p-5 sm:p-10 lg:p-16 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 transform transition-opacity duration-300 ease-in-out ${
//           isOpen ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}
//         onAnimationEnd={() => {
//           // Set isOpen to false after the fade-out animation is complete
//           if (!isOpen) {
//             setIsOpen(false);
//           }
//         }}>

export default ProjectCardPage;