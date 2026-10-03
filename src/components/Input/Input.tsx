import type { InputProps } from "./Input.type"
import styles from '../Input/Input.module.scss'

const Input = ({type,placeholder, ...props}:InputProps) =>
{
    return (
     < input 
       type={type}
       placeholder={placeholder}
       {...props}
       className={styles.input}
     />
    )
}

export default Input;