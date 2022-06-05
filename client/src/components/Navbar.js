import React from 'react';
import SearchBar from './Search';


function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a class="navbar-brand" href="#NewsList"
          onClick={() => handlePageChange('News')}>Null and Void News</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
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
                //  TODO: Add a comment explaining what this logic is doing

                className={currentPage === 'Business' ? 'nav-link active' : 'nav-link'}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Health"
                onClick={() => handlePageChange('Health')}
                //  TODO: Add a comment explaining what this logic is doing

                className={currentPage === 'Health' ? 'nav-link active' : 'nav-link'}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Entertainment"
                onClick={() => handlePageChange('Entertainment')}
                //  TODO: Add a comment explaining what this logic is doing

                className={currentPage === 'Entertainment' ? 'nav-link active' : 'nav-link'}
              >
                Entertainment
              </a>
            </li>
          <li className="nav-item">
              <a
                href="#sports"
                onClick={() => handlePageChange('Sports')}
                //  TODO: Add a comment explaining what this logic is doing

                className={currentPage === 'Sports' ? 'nav-link active' : 'nav-link'}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Technology"
                onClick={() => handlePageChange('Technology')}
                //  TODO: Add a comment explaining what this logic is doing

                className={currentPage === 'Technology' ? 'nav-link active' : 'nav-link'}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                //  TODO: Add a comment explaining what this logic is doing

                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;