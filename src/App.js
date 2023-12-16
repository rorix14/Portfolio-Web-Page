import ProjectCardPage from "./pages/ProjectCardPage";
import ModalPage from "./pages/ModalPage";
import Button from "./components/Button";
import {GoCode} from "react-icons/go";

function App() {
    return (
        <div>
            <div>Portfolio Header</div>
            <div>
                <Button secondary rounded outline>
                    <GoCode/>
                    Test button component
                </Button>
            </div>
            <div>
                <ModalPage/>
            </div>
            <div className='bg-amber-100'>
                <ProjectCardPage/>
            </div>
        </div>
    );
}

export default App;