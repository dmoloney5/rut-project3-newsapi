import React, { useState } from "react";
import axios from "axios";

function SearchBar({ handlePageChange, setSearchResults }) {
  //jsx
  const [barState, setBarState] = useState("");
  const [setArticles] = useState([]);
  function handleChange(e) {
    setBarState(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${barState}&sortBy=popularity&apiKey=61b7a8f9debe482ca9463aa72a5ca4a3`
    );
    console.log(barState, response.data.articles);
    setArticles (response.data.articles);
    setSearchResults(response.data.articles)
    handlePageChange("Search")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='search'>
        Search: 
        <input type="text" value={barState} onChange={handleChange} className='serach' />
      </label>
      <input type="submit" value="Submit" className='search-submit'/>
    </form>

  );
}

export default SearchBar;
