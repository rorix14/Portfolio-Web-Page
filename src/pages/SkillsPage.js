import {Tooltip} from 'react-tooltip'

function SkillsPage({skills}) {
    const skillsByCategory = [];

    const colors = ["bg-red-500", "bg-yellow-500", "bg-green-500"]
    const levelToColorMap = new Map();

    skills.forEach((skill) => {
        const category = skill.category;
        let hadCategory = false;

        if (!levelToColorMap.has(skill.level)) {
            levelToColorMap.set(skill.level, colors[levelToColorMap.size])
        }

        skillsByCategory.forEach((categorySkills) => {
            if (categorySkills[0].category === category) {
                categorySkills.push(skill);
                hadCategory = true;
            }
        });

        if (!hadCategory) {
            skillsByCategory.push([skill]);
        }
    });

    //const bg = "bg-[#29375b]"; //--midnight

    // const bg = "bg-[#114B5F]";
    // const sectionTitle = "text-[#F45B69]";
    // const sectionHeading = "text-[#009FB7]";

    const renderedSkillLevelColor = [];
    levelToColorMap.forEach((color, level) => {
        renderedSkillLevelColor.push(
            <div key={renderedSkillLevelColor.length}  className="flex items-center space-x-1">
                <span className={`p-2 rounded-full ${color}`}></span>
                <p className="underline text-milky-way">{level}</p>
            </div>
        )
    });

    const renderedSkills = skillsByCategory.map((categorySkills, i) => {
        return (
            <div key={i} className="flex flex-col items-center md:items-start space-y-5 md:space-y-7">
                <h1 className="text-center text-xl md:text-2xl font-bold text-tangerine">{categorySkills[0].category}</h1>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-6">
                    {categorySkills.map((skill, y) => {
                        return (
                            <div key={y} className="flex items-center space-x-2">
                                <img src={skill.imageLogo} alt={skill.name} className="w-9 h-9 md:w-12 md:h-12"
                                     data-tooltip-id="my-tooltip"
                                     data-tooltip-content={skill.name}/>
                                <span className={`p-2 rounded-full ${levelToColorMap.get(skill.level)}`}></span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    });

    //To show skill color next to the top of the icons, instead of the center
    //<div className="min-h-screen py-10 bg-blue-200 flex flex-col items-center justify-center">
    //<div className="flex-grow flex flex-col md:flex-row">
    return (
        <div className="min-h-screen py-10 flex flex-col bg-midnight">
            <div className="text-center space-y-2 mb-10">
                <h1 className="text-4xl font-bold text-tangerine">Skills</h1>
                <p className="text-lg text-lavender">[Section sub-title]</p>
            </div>
            <div className="flex-grow flex flex-col md:flex-row items-center justify-center">
                <div className="md:hidden flex flex-row space-x-4 border-2 rounded-lg w-fit p-2 mb-5 border-lavender">
                    {renderedSkillLevelColor}
                </div>
                <div className="flex flex-col space-y-9 md:space-y-11 mx-6">
                    {renderedSkills}
                </div>
                <div className="hidden md:flex flex-col space-y-2 border-2 rounded-lg h-fit p-2 border-lavender">
                    {renderedSkillLevelColor}
                </div>
            </div>
            <Tooltip id="my-tooltip" opacity={0.95} style={{fontSize: "1.125rem", lineHeight: "1.75rem"}}/>
        </div>

    )
}

export default SkillsPage;