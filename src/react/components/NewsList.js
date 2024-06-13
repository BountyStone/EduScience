import React, { useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {
    const [newsData] = useState([
        { id: 1, title: 'Новина 1', shortDescription: 'Короткий опис новини 1', fullDescription: 'Повний текст новини 1' },
        { id: 2, title: 'Новина 2', shortDescription: 'Короткий опис новини 2', fullDescription: 'Повний текст новини 2' },
        
    ]);

    const [selectedNews, setSelectedNews] = useState(null);

    const selectNews = (news) => {
        setSelectedNews(news);
    };

    return (
        <div className="news-list grid-container">
            {newsData.map((news) => (
                <NewsItem key={news.id} news={news} selectNews={selectNews} />
            ))}
            {selectedNews && (
                <div className="full-news">
                    <h3>{selectedNews.title}</h3>
                    <p>{selectedNews.fullDescription}</p>
                    <button onClick={() => setSelectedNews(null)} className="btn btn-primary">Закрити</button>
                </div>
            )}
        </div>
    );
};

export default NewsList;