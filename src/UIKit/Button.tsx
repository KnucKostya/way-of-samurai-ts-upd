import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    name: string
    status?: boolean
    disabled?: boolean
    callback: () => void
}

export const Button: React.FC<ButtonProps> = React.memo((props) => {

    const btnClass = props.status ? `${styles.btn} ${styles.grey}` : `${styles.btn} ${styles.blue}`

    return <button className={btnClass} onClick={()=>props.callback()} disabled={props.disabled}>{props.name}</button>
})