import ProjectCard from "../components/ProjectCard";
import BatmanImage from "../images/Batman_Capivara.jpg";
import SuperManImage from "../images/Super_Capivara.jpg";
import JokerImage from "../images/Joker_Capivara.jpg";

function ProjectCardPage() {
    const projectsList = [
        {title: 'Planet Eden', description: 'RPG game in space', image: BatmanImage},
        {
            title: 'Tiny Ref',
            description: 'Simulation game of an aquarium pedro silva, ines nobre, and me!',
            image: SuperManImage
        },
        {title: 'Rotten Eden', description: 'Multiplayer horde based FPS', image: JokerImage},
        {title: 'Planet Eden 2', description: 'RPG game in space', image: BatmanImage},
        {title: 'Tiny Ref 2', description: 'Simulation game of an aquarium', image: SuperManImage},
        {title: 'Rotten Eden 2', description: 'Multiplayer horde based FPS', image: JokerImage},
    ];

    const renderedProjectCards = projectsList.map((project, index) => {
        // return <div key={index} className='sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2'>
        //     <ProjectCard project={project}/>
        // </div>
        return <ProjectCard key={project.title} project={project}/>
    })

    //return <div className='flex flex-wrap mx-8 my-8'>{renderedProjectCards}</div>
    //justify-items-center scale-50
    return <div className='bg-amber-100'>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 sm:w-3/5 md:w-3/5 lg:w-2/3">
            {renderedProjectCards}
        </div>
    </div>
}

export default ProjectCardPage;