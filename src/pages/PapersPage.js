import {ImFilePdf} from "react-icons/im";

function PapersPage({papers}) {
    const renderedProjects = papers.map((paper, index) => {
        return (
            <li key={index} className="md:text-lg flex flex-col items-center text-center space-y-1.5">
                {/*<a href={paper.link} target="_blank" rel="noopener noreferrer"*/}
                {/*   className="text-xl md:text-2xl transition duration-200 text-milky-way hover:text-dark-tangerine">{paper.title}</a> */}
                <h2 className="text-xl md:text-2xl text-milky-way">{paper.title}</h2>
                <p className="text-lavender">{paper.authors} ({paper.year})</p>
                <a href={paper.link} target="_blank" rel="noopener noreferrer"
                   className="w-fit hover:underline underline-offset-1 text-tangerine">{paper.link}</a>
                <a href={paper.pdfFile} target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center gap-x-0.5 hover:underline underline-offset-1 text-tangerine">
                    <ImFilePdf/>Download</a>
            </li>
        )
    })

    return (
        <div className="min-h-screen py-10 flex flex-col bg-midnight">
            <div className="text-center space-y-2 mb-10">
                <h1 className="text-4xl font-bold text-tangerine">Papers</h1>
                <p className="text-lg text-lavender">Explore my academic publications:</p>
            </div>
            <ul className="flex-grow flex flex-col justify-center space-y-8">
                {renderedProjects}
            </ul>
        </div>
    )
}

export default PapersPage;