import type { InputProps } from "./Input.type"


const Input = ({placeholder}:InputProps) =>
{
    return (
     < input 
       placeholder={placeholder}
     />
    )
}

export default Input;