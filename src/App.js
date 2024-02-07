import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectCardPage from "./pages/ProjectCardPage";
import PapersPage from "./pages/PapersPage";
import ContactsPage from "./pages/ContacsPage";
import {projectsList, papers, contacts, skills} from "./PortfolioObjects";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";

function App() {

    const sections = [{
        id: 'sec 1',
        name: 'About'
    }, {
        id: 'sec 2',
        name: 'Skills'
    }, {
        id: 'sec 3',
        name: 'Projects'
    }, {
        id: 'sec 4',
        name: 'Papers'
    }, {
        id: 'sec 5',
        name: 'Contact'
    }];

    return (
        <div>
            <NavBar sections={sections}/>
            <HomePage/>
            <section id={sections[0].id}>
                <AboutPage/>
            </section>
            <section id={sections[1].id}>
                <SkillsPage skills={skills}/>
            </section>
            <section id={sections[2].id}>
                <ProjectCardPage projectsList={projectsList}/>
            </section>
            <section id={sections[3].id}>
                <PapersPage papers={papers}/>
            </section>
            <section id={sections[4].id}>
                <ContactsPage contacts={contacts}/>
            </section>
        </div>
    );
}

export default App;