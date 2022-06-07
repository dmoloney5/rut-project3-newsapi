import React from 'react'
import NewsItem from './NewsItem'

function SearchResults({searchResults}) {
  console.log("blah" + searchResults);
  return (
    <div className="SearchResults">
      {searchResults?.map((article) => {
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
}

export default SearchResults;