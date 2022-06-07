

import React from 'react';
import SearchBar from './Search';
import Signup from './Signup';
import Login from './login';

function Nav({ currentPage, handlePageChange, setSearchResults }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#NewsList"
          onClick={() => handlePageChange('News')}>Null and Void News</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <SearchBar
          handlePageChange={handlePageChange}
          setSearchResults={setSearchResults}
        />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#NewsList"
                onClick={() => handlePageChange('NewsList')}
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
                href="#Health"
                onClick={() => handlePageChange('Health')}
                className={currentPage === 'Health' ? 'nav-link active' : 'nav-link'}
              >
                Health
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
                href="#sports"
                onClick={() => handlePageChange('Sports')}
                className={currentPage === 'Sports' ? 'nav-link active' : 'nav-link'}
              >
                Sports
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
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#donate"
                onClick={() => handlePageChange('Donation')}
                className={currentPage === 'Donation' ? 'nav-link active' : 'nav-link'}
              >
                Donation
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                href="#Signup"
                onClick={() => handlePageChange('Signup')}
                className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
              >
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Login"
                onClick={() => handlePageChange('Login')}
                className={currentPage === Login ? 'nav-link active' : 'nav-link'}
              >
                Login
              </a>
            </li> */}
            <Login />
            <Signup />
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;