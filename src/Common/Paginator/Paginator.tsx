import React, {useState} from "react";

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

    console.log('totalCount:', totalCount)
    console.log('count:', count)
    //ФУНКЦИЯ СЧИТАЮЩАЯ ОБЩЕЕ КОЛИЧЕСТВО СТРАНИЦ
    let countPagesArr: number[] = []
    let totalCountPages = Math.ceil(totalCount / count)
    for (let i = 1; i <= totalCountPages; i++) {
        countPagesArr.push(i)
    }

    console.log('countPagesArr:', countPagesArr)

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
    // left and right arrows logic

    return (
        <div>
            <div>
                <button onClick={prevPaginationHandler}>{`prev`}</button>
                {countPagesArr.filter(p => {
                    return p >= leftPortionValue && p <= rightPortionNumber
                }).map(pages => {
                    return<span key={pages} onClick={() => onPageChangedMethod(pages)}>{pages}</span>
                })
                }
                <button onClick={nextPaginationHandler}>{`next`}</button>

            </div>
        </div>
    );
};
