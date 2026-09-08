import type { ButtonProps } from "./Button.type"


const Button = ({label}:ButtonProps) => {

    return (
        <>
        <button>{label}</button>
        </>
    )
}

export default Button;