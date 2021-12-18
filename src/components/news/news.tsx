import React from 'react'
import faker from 'faker'
import './style.scss'

function NewsItem() {
    return (
        <div className="news-item">
            <img src={faker.image.image()} alt="news image" />
            <h4 className="news-title">{faker.lorem.words(2)}</h4>
            <p className="news-description">{faker.lorem.words(15)}</p>
        </div>
    )
}

export default NewsItem
