function ProjectCard({project}) {
    const {title, description, image} = project;

    return (
        <div className='bg-white rounded overflow-hidden shadow-md transition-transform hover:scale-90'>
            <div>
                <img src={image} alt={title} className="w-full object-cover"/>
            </div>
            <div className='py-3'>
                <h2 className="text-lg font-bold mb-1 text-center">{title}</h2>
                <p className="text-gray-700 text-center">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;
