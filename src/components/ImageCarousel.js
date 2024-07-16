import {useState} from "react";
import {GrClose} from "react-icons/gr";
import {MdArrowBackIosNew} from "react-icons/md";
import {MdArrowForwardIos} from "react-icons/md";

function ImageCarousel({onClose, title, images, showIndex}) {
    const [imageIndex, setImageIndex] = useState(showIndex);

    const handleImageChange = (index) => {
        if (index >= images.length || index < 0) return;

        setImageIndex(index)
    }

    return (
        <div onClick={onClose}
             className='fixed inset-0 flex flex-col items-center justify-center bg-gray-950 bg-opacity-80 overflow-auto px-3.5'>
            <div className="flex w-full justify-end mt-8 md:pr-40">
                <button onClick={onClose}
                        className="flex items-center opacity-40 hover:opacity-100 transition duration-200 text-milky-way">
                    <GrClose className="w-6 h-6 md:w-8 md:h-8"/>
                </button>
            </div>
            <img className="flex object-contain h-96 sm:h-5/6 sm:w-3/4 md:w-3/5"
                 onClick={(event) => event.stopPropagation()} src={images[imageIndex]} alt={title}/>
            <div className="flex mb-5">
                <MdArrowBackIosNew
                    className={`transition duration-200 w-10 h-10 md:w-16 md:h-16 
                    ${imageIndex <= 0 ? 'text-gray-800' : 'cursor-pointer text-gray-600 hover:text-gray-300 active:text-milky-way'}`}
                    onClick={(event) => {
                        handleImageChange(imageIndex - 1);
                        event.stopPropagation();
                    }}/>
                <MdArrowForwardIos
                    className={`transition duration-200 w-10 h-10 md:w-16 md:h-16 
                    ${imageIndex >= images.length - 1 ? 'text-gray-800' : 'cursor-pointer text-gray-600 hover:text-gray-300 active:text-milky-way'}`}
                    onClick={(event) => {
                        handleImageChange(imageIndex + 1);
                        event.stopPropagation();
                    }}/>
            </div>
        </div>)
}

export default ImageCarousel;