import React from 'react'
import {Header}  from '../../components/header'
import { NewsItem } from '../../components/news'
import './style.scss'

function NewsPage() {

    const getNews =  () => {
        const news = []
        const randomNumber = Math.floor(Math.random() * 15) + 1    
        for (let i = 0; i < randomNumber; i++) 
            news.push(<NewsItem/>)
        return news
    }
    return (
        <>
        <Header/>
        <div className="news-list"> 
           {getNews().map(item =>  <NewsItem key={0}/>)}
        </div>
        </>
    )
}

export default NewsPage
