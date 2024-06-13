import React from 'react';

const NewsItem = ({ news, selectNews }) => (
    <div className="news-item grid-item" onClick={() => selectNews(news)}>
        <h3>{news.title}</h3>
        <img src={news.image} alt={news.title} />
        <p>{news.shortDescription}</p>
        <p><small>{date}</small></p>
    </div>
);

export default NewsItem;