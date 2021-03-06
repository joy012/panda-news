import React, { useState,useEffect } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=85f4365db19845298708f4616c6fbdbc')
        .then(response => response.json())
        .then(data => setNews(data.articles))
    }, [])
    return (
        <div>
            <h1 className="text-center">Top Headlines: {news.length}</h1>
            {
                news.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadLine;