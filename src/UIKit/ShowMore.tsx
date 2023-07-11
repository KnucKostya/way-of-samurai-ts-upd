import React, {ReactElement} from "react"
import styles from "./ShowMore.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faRotateRight} from "@fortawesome/free-solid-svg-icons"

export const ShowMore: React.FC<ShowMoreType> = React.memo(({callback}): ReactElement => {
    const onClickHandler = () => {
        callback()
    }

    return (
        <div>
            <div className={styles.btn} onClick={onClickHandler}>
                <FontAwesomeIcon className={styles.icon} icon={faRotateRight} size="lg" />
            </div>
        </div>
    )
})

// TYPES
type ShowMoreType = {
    callback: () => void
}
