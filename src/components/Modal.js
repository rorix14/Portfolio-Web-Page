import ReactDOM from "react-dom";
import {useEffect} from "react";
import {GrClose} from "react-icons/gr";

function Modal({onClose, children, actionBar}) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    })

    return ReactDOM.createPortal(
        <div onClick={onClose}
             className='fixed inset-0 flex items-start justify-center bg-dark-midnight bg-opacity-80 overflow-auto py-12 px-3.5 z-20'>
            <div onClick={(event) => event.stopPropagation()}
                 className='rounded-md border border-lavender p-4 sm:py-8 sm:px-10 lg:px-16 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-midnight'>
                <div className="flex justify-end">
                    <button onClick={onClose}
                            className="flex items-center opacity-50 hover:opacity-100 transition duration-200 text-lavender">
                        <GrClose className="w-6 h-6"/></button>
                </div>
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-center">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container"));
}

export default Modal;