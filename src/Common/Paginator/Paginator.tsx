import React, {useState} from "react";
import s from './Paginator.module.css'

export type PaginatorPropsType = {
    totalCount: number
    count: number
    currentPage: number
    onPageChangedMethod: (n: number) => void
    portionSize?: number
}

export const Paginator = (props: PaginatorPropsType) => {
    let {totalCount, count, currentPage, onPageChangedMethod} = props
    const [portionNumber, setPortionNumber] = useState(1)

    let countPagesArr: number[] = []
    let totalCountPages = Math.ceil(totalCount / count)
    for (let i = 1; i <= totalCountPages; i++) {
        countPagesArr.push(i)
    }


    let portionSize = 20
    let blockPortionsCount = Math.ceil(totalCountPages / portionSize) // total block-portions count
    let leftPortionValue: number = (portionNumber - 1) * portionSize + 1 //left border of 1-st element
    let rightPortionNumber: number = portionNumber * portionSize //right border of last element

    // left and right arrows logic
    const prevPaginationHandler = () => {
        if (portionNumber > 1)
            setPortionNumber(portionNumber - 1)
    }
    const nextPaginationHandler = () => {
        if (portionNumber < blockPortionsCount)
            setPortionNumber(portionNumber + 1)
    }

    return (
        <div className={s.pagination}>
                <button className={s.button} onClick={prevPaginationHandler}>{`prev`}</button>
                {countPagesArr.filter(p => {
                    return p >= leftPortionValue && p <= rightPortionNumber
                }).map(pages => {
                    return<span className={s.pageNumber}
                                key={pages} onClick={() => onPageChangedMethod(pages)}>{pages}</span>
                })
                }
                <button className={s.button} onClick={nextPaginationHandler}>{`next`}</button>
        </div>
    );
};
