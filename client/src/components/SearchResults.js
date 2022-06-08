import React from 'react'
import NewsItem from './NewsItem'

function SearchResults({searchResults}) {
  console.log("blah" + searchResults);
  return (
    <div className="SearchResults">
      {searchResults?.map((data) => {
        return (
          <NewsItem
            key={data.title}
            title={data.title}
            description={data.description}
            url={data.url}
            imageUrl={data.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default SearchResults;