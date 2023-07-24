import React, { ChangeEvent, useEffect, useState } from 'react'
import s from './news.module.css'
import { getNewsDataThunk } from '../../../Redux/reducers/newsReducer'
import { useAppSelector, useTypedDispatch } from '../../../Redux/store'

// api key: 0a6f315b05ea410e90d85d31eff13ab9
// get started : https://newsapi.org/docs/get-started

const News = () => {
  const [searchValue, setSearchValue] = useState('')
  const [visibleElements, setVisibleElements] = useState(10)
  const news = useAppSelector(state => state.news.sources.slice(0, visibleElements))
  const dispatch = useTypedDispatch()

  const searchNews = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }
  let searchInputValue
  searchInputValue = news.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()))

  useEffect(() => {
    dispatch(getNewsDataThunk())
  }, [dispatch])

  return (
    <div className={s.news}>
      <input
        type="text"
        placeholder={'enter the desired value...'}
        value={searchValue}
        onChange={searchNews}
      />
      {searchInputValue?.map(news => {
        return (
          <div className={s.news} key={news.id}>
            <span>{news.name}</span>
            <span>Country: {news.country}</span>
            <span>News Language: {news.language}</span>
            <span>Category: {news.category}</span>
            <span>Description: {news.description}</span>
            <span>
              <a href={news.url} className={s.link}>
                Tap here to see {news.name} news
              </a>
            </span>
          </div>
        )
      })}
      <div className={s.loadBt}>
        <button onClick={() => setVisibleElements(visibleElements + 20)}>Load More News</button>
      </div>
    </div>
  )
}

export default News
