import React from "react";
import "./newsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-app">
            <div className='news-item'>
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h3><a className= 'news-title news-text' href={url}>{title}</a></h3>
                <p className= 'news-text'>{description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
