import React, {ReactElement} from "react"
import preloader from "../../img/user-avatar.jpg"
import styles from "./Preloader.module.css"

export const Preloader = (): ReactElement => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt={"preloader"} />
        </div>
    )
}
