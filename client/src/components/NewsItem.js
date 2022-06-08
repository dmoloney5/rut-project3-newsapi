import React from "react";
import "./newsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="news-app">
        <div className="news-item">
          <img className="news-img" src={urlToImage} alt={urlToImage} />
          <h3>
            <a href={url}>{title}</a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
