import className from 'classnames'
import {twMerge} from "tailwind-merge";
import {useState} from "react";

function Button({children, primary, secondary, outline, rounded, ...rest}) {

    const [isHovered, setHover] = useState(false);
    const [isClicked, setClicked] = useState(false);

    const combinedOnMouseEnter = () => {
        if (rest.onMouseEnter) {
            rest.onMouseEnter();
        }
        setHover(true);
    };

    const combinedOnMouseLeave = () => {
        if (rest.onMouseLeave) {
            rest.onMouseLeave();
        }
        setHover(false);
    };

    const combinedOnMouseDown = () => {
        if (rest.onMouseDown) {
            rest.onMouseDown();
        }
        setClicked(true);
    }

    const combinedOnMouseUp = () => {
        if (rest.onMouseUp) {
            rest.onMouseUp();
        }
        setClicked(false);
    }

    const classes = twMerge(className(rest.className, 'flex items-center gap-2 px-3 py-1.5 border', {
        'border-blue-500 bg-blue-400 text-white': primary,
        'border-gray-900 bg-gray-800 text-white': secondary,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline & primary,
        'text-gray-900': outline & secondary,
        'bg-blue-600 text-grey': isHovered & primary,
        'bg-gray-900 text-white': isHovered & secondary,
        'border-4': isClicked & isHovered
    }))

    return (
        <button {...{
            ...rest,
            onMouseEnter: combinedOnMouseEnter,
            onMouseLeave: combinedOnMouseLeave,
            onMouseDown: combinedOnMouseDown,
            onMouseUp: combinedOnMouseUp
        }} className={classes}>
            {children}
        </button>
    )
}

export default Button;