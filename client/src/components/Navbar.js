import React from 'react';
import SearchBar from './Search';
import Auth from '../utils/auth';

function Nav({ currentPage, handlePageChange, setSearchResults }) {
  const logout = event => {
    event.preventDefault();
    Auth.logout();

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='search'>
          <SearchBar
            handlePageChange={handlePageChange}
            setSearchResults={setSearchResults}
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#Newslist"
                onClick={() => handlePageChange('Newslist')}
                className={currentPage === 'NewsList' ? 'nav-link active' : 'nav-link'}
              >
                Top Stories
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Business"
                onClick={() => handlePageChange('Business')}
                className={currentPage === 'Business' ? 'nav-link active' : 'nav-link'}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Entertainment"
                onClick={() => handlePageChange('Entertainment')}
                className={currentPage === 'Entertainment' ? 'nav-link active' : 'nav-link'}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Technology"
                onClick={() => handlePageChange('Technology')}
                className={currentPage === 'Technology' ? 'nav-link active' : 'nav-link'}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Sports"
                onClick={() => handlePageChange('Sports')}
                className={currentPage === 'Sports' ? 'nav-link active' : 'nav-link'}
              >
                Sports
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#Donation"
                onClick={() => handlePageChange('Donation')}
                className={currentPage === 'Donation' ? 'nav-link active' : 'nav-link'}
              >
                Donation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="nav-item lors">
              <a
                href="#LoginOrSignup"
                onClick={() => handlePageChange('LoginOrSignup')}
                className={currentPage === 'LoginOrSignup' ? 'nav-link active' : 'nav-link'}
              >
                Login or Signup
              </a>
              <a href="/" onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;