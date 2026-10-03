import type { ButtonProps } from "./Button.type"
import styles from "../Button/Button.module.scss"

const Button = ({label, type}:ButtonProps) => {

    return (
        <>
        <button type={type} className={styles.Btn}>{label}</button>
        </>
    )
}

export default Button;