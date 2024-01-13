import myImage from '../images/Super_Capivara.jpg';
import myCV from '../documents/Comparing_evolutionary_and_temporal_diff.pdf';
import Button from "../components/Button";
import {ImFilePdf} from "react-icons/im";

function AboutPage() {
    const sampleText = "Integer sapien felis, auctor vel augue vitae, pretium feugiat odio. Aliquam viverra vitae massa eu suscipit.\\n' +\n" +
        "            '            Fusce gravida rutrum aliquam. Pellentesque vitae nunc at tortor aliquet aliquet a a tortor. Mauris at\\n' +\n" +
        "            '            imperdiet dui, sit amet fermentum erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices\\n' +\n" +
        "            '            posuere cubilia curae; Duis auctor dui quis suscipit imperdiet. Aliquam mi urna, ullamcorper vel pharetra\\n' +\n" +
        "            '            et, dignissim ut erat. Pellentesque aliquam sit amet velit vitae faucibus. Sed vulputate tempus convallis.\\n' +\n" +
        "            '            Cras commodo purus ante, et vulputate eros interdum sit amet. Proin non tempus ex. Cras aliquam laoreet\\n' +\n" +
        "            '            felis vel tincidunt. Cras dignissim justo urna, ut dignissim nisl vulputate ut. Morbi a blandit nibh.\\n' +\n" +
        "            '            Praesent eleifend ipsum quis ante ultrices, eget lacinia ex convallis.' +\n" +
        "            'Integer sapien felis, auctor vel augue vitae, pretium feugiat odio. Aliquam viverra vitae massa eu suscipit.\\n' +\n" +
        "            '            Fusce gravida rutrum aliquam. Pellentesque vitae nunc at tortor aliquet aliquet a a tortor. Mauris at\\n' +\n" +
        "            '            imperdiet dui, sit amet fermentum erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices\\n' +\n" +
        "            '            posuere cubilia curae; Duis auctor dui quis suscipit imperdiet. Aliquam mi urna, ullamcorper vel pharetra\\n' +\n" +
        "            '            et, dignissim ut erat. Pellentesque aliquam sit amet velit vitae faucibus. Sed vulputate tempus convallis.\\n' +\n" +
        "            '            Cras commodo purus ante, et vulputate eros interdum sit amet. Proin non tempus ex. Cras aliquam laoreet\\n' +\n" +
        "            '            felis vel tincidunt. Cras dignissim justo urna, ut dignissim nisl vulputate ut. Morbi a blandit nibh.\\n' +\n" +
        "            '            Praesent eleifend ipsum quis ante ultrices, eget lacinia ex convallis."

    return (
        <section className="min-h-screen py-10 flex flex-col items-center justify-center bg-stone-200">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">About Me</h1>
                <p className="text-lg">
                    Hello, I'm [Your Name]. [Add a brief description about yourself here.]
                </p>
            </div>
            <div className="flex flex-col lg:flex-row mx-4 lg:mx-24 items-center lg:items-start gap-10 lg:gap-16">
                <img src={myImage} alt="Myself"
                     className="w-64 h-64 lg:w-72 lg:h-72 rounded-3xl border-2 border-black"/>
                <div className="flex flex-col items-center">
                    <p className="text-lg">
                        {sampleText}
                    </p>
                </div>
            </div>
            <a href={myCV} target="_blank" rel="noopener noreferrer" className="mt-10">
                <Button secondary><ImFilePdf/>Download CV</Button>
            </a>
        </section>
    )
}

export default AboutPage;