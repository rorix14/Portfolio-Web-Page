import className from 'classnames'
import {twMerge} from "tailwind-merge";

function Button({children, primary, secondary, outline, rounded, ...rest}) {
    const classes = twMerge(className(rest.className, 'flex items-center gap-2 px-6 py-3 border text-lg transition duration-300', {
        'rounded border-dark-tangerine bg-tangerine text-milky-way hover:bg-dark-tangerine active:bg-old-tangerine': primary,
        'rounded border-iris bg-lavender text-milky-way hover:bg-iris active:bg-twilight': secondary,
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