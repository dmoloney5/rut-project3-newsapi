import React, { useState } from 'react'
import axios from 'axios'

function SearchBar({handlePageChange,setSearchResults}) {
  //jsx
  const [barState, setBarState] = useState("");
  const [setArticles] = useState([]);
  function handleChange(e) {
    setBarState(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.get(`https://inshorts.deta.dev/news?category=${barState}`)
    console.log(barState, response.data.data);
    setArticles (response.data.data);
    setSearchResults(response.data.data)
    handlePageChange("Search")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='search'>
        Search: 
        <input type="text" value={barState} onChange={handleChange} className='Search' />
      </label>
      <input type="submit" value="Submit" className='search-submit'/>
    </form>

  );
}

export default SearchBar;