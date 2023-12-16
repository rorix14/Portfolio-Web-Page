import ProjectCard from "../components/ProjectCard";
import BatmanImage from "../images/Batman_Capivara.jpg";
import SuperManImage from "../images/Super_Capivara.jpg";
import JokerImage from "../images/Joker_Capivara.jpg";

function ProjectCardPage() {
    const projectsList = [
        {title: 'Planet Eden', description: 'RPG game in space', image: BatmanImage},
        {title: 'Tiny Ref', description: 'Simulation game of an aquarium pedro silva, ines nobre, and me!', image: SuperManImage},
        {title: 'Rotten Eden', description: 'Multiplayer horde based FPS', image: JokerImage},
        {title: 'Planet Eden 2', description: 'RPG game in space', image: BatmanImage},
        {title: 'Tiny Ref 2', description: 'Simulation game of an aquarium', image: SuperManImage},
        {title: 'Rotten Eden 2', description: 'Multiplayer horde based FPS', image: JokerImage},
    ];

    const renderedProjectCards = projectsList.map((project, index) => {
        return <div key={index} className='sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2'>
            <ProjectCard project={project}/>
        </div>
    })

    return <div className='flex flex-wrap mx-8 my-8'>{renderedProjectCards}</div>
}

export default ProjectCardPage;