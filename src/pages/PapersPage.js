import {ImFilePdf} from "react-icons/im";

function PapersPage({papers}) {
    const renderedProjects = papers.map((paper, index) => {
        return (
            <li key={index} className="md:text-lg flex flex-col items-center text-center space-y-1.5">
                <h2 className="text-xl md:text-2xl">{paper.title}</h2>
                <p>{paper.authors} ({paper.year})</p>
                <a href={paper.link} target="_blank" rel="noopener noreferrer"
                   className="w-fit text-blue-600 hover:underline underline-offset-1">[Link where the paper was
                    published.com]</a>
                <a href={paper.pdfFile} target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center gap-x-0.5 text-blue-600 hover:underline underline-offset-1"> <ImFilePdf/>Download</a>
            </li>
        )
    })

    return (
        <div className="min-h-screen py-10 bg-blue-200 flex flex-col">
            <div className="text-center space-y-2 mb-10">
                <h1 className="text-4xl font-bold">Papers</h1>
                <p className="text-lg">Explore my academic publications:</p>
            </div>
            <ul className="flex-grow flex flex-col justify-center space-y-8">
                {renderedProjects}
            </ul>
        </div>
    )
}

export default PapersPage;