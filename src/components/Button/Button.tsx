import type { ButtonProps } from "./Button.type"
import styles from "../Button/Button.module.scss"

const Button = ({label, type, action}:ButtonProps) => {

    return (
        <>
        <button type={type} className={styles.Btn} onClick={action}>{label}</button>
        </>
    )
}

export default Button;