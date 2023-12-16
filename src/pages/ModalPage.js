import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div><Button primary onClick={handleClose}>Close</Button></div>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is some long text: </p>
        <p>Integer sapien felis, auctor vel augue vitae, pretium feugiat odio. Aliquam viverra vitae massa eu suscipit.
            Fusce gravida rutrum aliquam. Pellentesque vitae nunc at tortor aliquet aliquet a a tortor. Mauris at
            imperdiet dui, sit amet fermentum erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Duis auctor dui quis suscipit imperdiet. Aliquam mi urna, ullamcorper vel pharetra
            et, dignissim ut erat. Pellentesque aliquam sit amet velit vitae faucibus. Sed vulputate tempus convallis.
            Cras commodo purus ante, et vulputate eros interdum sit amet. Proin non tempus ex. Cras aliquam laoreet
            felis vel tincidunt. Cras dignissim justo urna, ut dignissim nisl vulputate ut. Morbi a blandit nibh.
            Praesent eleifend ipsum quis ante ultrices, eget lacinia ex convallis.

      </p>
    </Modal>;

    return (
        <div>
            <Button primary onClick={handleClick}>
                Open modal
            </Button>
            {showModal && modal}
        </div>);
}

export default ModalPage;