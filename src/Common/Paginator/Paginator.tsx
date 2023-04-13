import s from "./Paginator.module.css";
import React from "react";

export type PaginatorPropsType = {
    totalCount:number
    count:number
    currentPage:number
    onPageChangedMethod:(n:number)=>void
}

export const Paginator = (props:PaginatorPropsType) => {
    let {totalCount,count,currentPage,onPageChangedMethod} = props
    //ФУНКЦИЯ СЧИТАЮЩАЯ ОБЩЕЕ КОЛИЧЕСТВО СТРАНИЦ
    let countPagesArr: number[] = []
    let totalCountPages = Math.ceil(totalCount / count)
    for (let i = 1; i <= totalCountPages; i++) {
        countPagesArr.push(i)
    }

    return (
        <div>
            <div>
                {countPagesArr.map((m, i) => {
                    return <span key={i} className={currentPage === m ? s.spanBold : s.span}
                                 onClick={() => onPageChangedMethod(m)}>{m}</span>
                })}
            </div>
        </div>
    );
};
