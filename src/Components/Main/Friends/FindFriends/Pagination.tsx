import React, {ReactElement, useState} from "react"
import styles from "./Pagination.module.css"
import {setCurrentPageAC} from "../../../../../../anotherSN/social-network/src/redux/reducers/friendsReducer"
import {
    faCircleChevronLeft,
    faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useAppDispatch} from "../../../../../../anotherSN/social-network/src/hooks/useAppDispatch"

type PaginationPropsType = {
    totalFoundFriends: number
    pageSize: number
    currentPageFindFriends: number
}

export const Pagination: React.FC<PaginationPropsType> = React.memo(
    ({totalFoundFriends, currentPageFindFriends, pageSize}): ReactElement => {
        const dispatch = useAppDispatch()

        const onClickHandler = (currentPage: number): void => {
            dispatch(setCurrentPageAC(currentPage))
        }

        const portionSize = 10

        const [portionNumber, setPortionNumber] = useState(1)
        const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
        const rightPortionPageNumber = portionNumber * portionSize

        let pagesCount = Math.ceil(totalFoundFriends / pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={styles.pagination}>
                <button
                    onClick={() => setPortionNumber(portionNumber - 1)}
                    disabled={portionNumber === 1}
                >
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faCircleChevronLeft}
                        size="2x"
                    />
                </button>
                {pages
                    .filter(
                        el => el >= leftPortionPageNumber && el <= rightPortionPageNumber,
                    )
                    .map(el => (
                        <span
                            className={
                                el === currentPageFindFriends
                                    ? `${styles.selectPage} ${styles.numberingPage}`
                                    : `${styles.numberingPage}`
                            }
                            onClick={() => onClickHandler(el)}
                        >
                            {el}
                        </span>
                    ))}
                <button
                    onClick={() => setPortionNumber(portionNumber + 1)}
                    disabled={portionNumber === Math.ceil(pagesCount / portionSize)}
                >
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faCircleChevronRight}
                        size="2x"
                    />
                </button>
            </div>
        )
    }
)
