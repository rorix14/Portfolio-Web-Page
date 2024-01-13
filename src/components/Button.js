import className from 'classnames'
import {twMerge} from "tailwind-merge";

function Button({children, primary, secondary, outline, rounded, ...rest}) {
    const classes = twMerge(className(rest.className, 'flex items-center gap-2 px-6 py-3 border text-lg transition duration-300', {
        'rounded border-blue-500 bg-blue-400 text-white hover:bg-blue-700 active:bg-blue-800': primary,
        'rounded border-gray-700 bg-gray-500 text-white hover:bg-gray-700 active:bg-gray-900': secondary,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500 hover:bg-blue-100 active:bg-blue-200': outline & primary,
        'text-gray-900 hover:bg-gray-200 active:bg-gray-400': outline & secondary,
    }))

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    )
}

export default Button;