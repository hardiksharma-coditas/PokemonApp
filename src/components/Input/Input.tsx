import type { InputProps } from "./Input.type"


const Input = ({type,placeholder, ...props}:InputProps) =>
{
    return (
     < input 
       type={type}
       placeholder={placeholder}
       {...props}
     />
    )
}

export default Input;