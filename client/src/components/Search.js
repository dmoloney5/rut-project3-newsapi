import React, { useState } from 'react'

function SearchBar() {
  //jsx
  const [barState, setBarState] = useState({ searchTarget: '' });
  //const [errMsg, setErrMsg] = useState('');
  function handleChange(e) {
    setBarState({ ...barState, [e.target.searchTarget]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(barState);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" value={this.state.value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchBar;