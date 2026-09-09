import type { ButtonProps } from "./Button.type"


const Button = ({label, type}:ButtonProps) => {

    return (
        <>
        <button type={type}>{label}</button>
        </>
    )
}

export default Button;