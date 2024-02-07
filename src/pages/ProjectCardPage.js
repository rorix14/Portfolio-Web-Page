import ProjectCard from "../components/ProjectCard";
import {useState} from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import {Tooltip} from "react-tooltip";
import {GrClose} from "react-icons/gr";

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

    const currentProject = projectsList[currentProjectIndex];

    const [imageToShow, setImageToShow] = useState();
    const [showImageFull, setImageFull] = useState(false);

    const handleShowImageFull = (index) => {
        setImageFull(true);
        setImageToShow(index);
    }
    const handleClose2 = () => {
        setImageFull(false);
    }
    const renderedImageFull = <div onClick={handleClose2}
                                   className='fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-80 overflow-auto px-3.5'>
        <img src={imageToShow} alt={currentProject.title} className="object-contain h-96 sm:h-5/6 sm:w-3/4 md:w-3/5"/>
    </div>

    /*<iframe width="560" height="315" src={projectsList[currentProjectIndex].trailer}
             title="YouTube video player" frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>*/
    const modal = <Modal onClose={handleClose}
                         actionBar={<Button secondary onClick={handleClose}><GrClose/>Close</Button>}>
        <h3 className="text-2xl md:text-3xl font-bold mb-2.5 md:mb-3 text-center text-tangerine">{currentProject.title}</h3>
        <iframe className="aspect-video mb-4" src={currentProject.trailer} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
        <p className="text-milky-way mb-8 whitespace-pre-line">{currentProject.summary}</p>
        <div className="text-center mb-8 space-y-3">
            <b className="text-lavender">View this project on GitHub: </b>
            <a href={currentProject.gitRepo} target="_blank" rel="noopener noreferrer"
               className="hover:underline underline-offset-1 text-tangerine">{currentProject.gitRepo}</a>
            {currentProject.downloadLink && <div>
                <b className="text-lavender">Download the game at: </b>
                <a href={currentProject.downloadLink} target="_blank" rel="noopener noreferrer"
                   className="hover:underline underline-offset-1 text-tangerine">{currentProject.downloadLink}</a>
            </div>}
        </div>
        <p className="text-center font-bold mb-0.5 text-lg text-tangerine">Tech used:</p>
        <div className="flex flex-wrap justify-center mb-8 mx-10 md:mx-28 lg:mx-32">
            {currentProject.tech.map((skill, index) => {
                return <img key={index} src={skill.imageLogo} alt={skill.name}
                                className="my-2 mx-2 md:my-3 md:mx-3 w-9 h-9 md:w-12 md:h-12"
                                data-tooltip-id="my-tooltip" data-tooltip-content={skill.name}/>;
                }
            )}
        </div>
        <p className="text-center font-bold mb-2 text-lg text-tangerine">{`${currentProject.title} images: `}</p>
        <div className="flex flex-wrap justify-center mb-8">
            {currentProject.images.map((image, index) => {
                    return <img key={index} src={image} alt={currentProject.title}
                                className="mt-0.5 mr-0.5 md:mt-1 md:mr-1 w-1/4 h-1/4 md:w-1/5 md:h-1/5 cursor-pointer"
                                onClick={() => handleShowImageFull(image)}/>;
                }
            )}
        </div>
        <Tooltip id="my-tooltip" opacity={0.95} style={{fontSize: "1.125rem", lineHeight: "1.75rem"}}/>
        {showImageFull && renderedImageFull}
    </Modal>

    const renderedProjectCards = projectsList.map((project, index) => {
        // return <div key={index} className='sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2'><ProjectCard project={project}/></div>
        return <ProjectCard key={project.title} project={project} onClick={() => handleClick(index)}/>
    })

    //<div className='flex flex-wrap mx-8 my-8'>{renderedProjectCards}</div>
    //justify-items-center scale-50
    return (
        <div className='min-h-screen py-10 bg-milky-way'>
            <div className="flex flex-col items-center justify-center mb-10">
                <h1 className="text-4xl font-bold text-twilight">Academic Projects</h1>
                <p className="mt-2 text-lg text-iris">A small description about the projects</p>
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