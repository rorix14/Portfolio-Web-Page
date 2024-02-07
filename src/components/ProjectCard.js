function ProjectCard({project, ...rest}) {
    const {title, description, image} = project;

    //w-80 sm:w-80 md:w-72 lg:w-72
    return (
        <div {...rest}
             className='hover:text-tangerine text-twilight hover:border hover:border-tangerine duration-200 cursor-pointer rounded-b-lg bg-white overflow-hidden shadow-lg transition hover:scale-90'>
            <div>
                <img src={image} alt={title} className="w-full object-cover"/>
            </div>
            <div className='py-3 group-hover:text-tangerine'>
                <h2 className="text-lg font-bold mb-1  text-center">{title}</h2>
                <p className="text-center text-iris">{description}</p>
            </div>
        </div>

    )
}

export default ProjectCard;
