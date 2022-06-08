import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsItem } from ".";
require("dotenv").config({ path: "../../.env" });

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://inshorts.deta.dev/news?category=all`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);
  return (
    <div className="NewsList">
      {articles.map((article) => {
        return (
          <NewsItem
            key={article.title}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
