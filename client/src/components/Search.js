import React, { useLayoutEffect, useState } from 'react'

function SearchBar() => {
  //jsx
  const [barState, setBarState] = useState({ searchTarget: '' });
  const [errMsg, setErrMsg] = useState('');
  function handleChange(e) {
    if (e.target.searchTarget === '') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your search is invalid.');
      } else {
        setErrorMessage('');
      }
      console.log('errorMessage:', errorMessage);
    }
    if (!errorMessage) {
      setBarState({ ...barState, [e.target.searchTarget]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(barState);
  }
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Search:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchBar;