import React, { useState } from 'react';
import Title from './Title';
import Navbar from './Navbar';
import NewsList from './NewsList';
import Business from './Business';
import Sports from './Sports';
import Technology from './Technology';
import Entertainment from './Entertainment';
import Contact from './Contact'
import Donation from './Donation';
import SearchResults from './SearchResults';
import LoginOrSignup from './LoginOrSignup';


export default function News() {
    const [currentPage, setCurrentPage] = useState('NewsList');
    const [searchResults,setSearch]=useState([]);
    const setSearchResults = (data) => {
        setSearch(data)
    }
    const renderPage = () => {
        if (currentPage === 'NewsList') {
            return <NewsList />;
        }
        if (currentPage === 'Business') {
            return <Business />;
        }
        if (currentPage === 'Sports') {
            return <Sports />;
        }
        if (currentPage === 'Technology') {
            return <Technology />;
        }
        if (currentPage === 'Entertainment') {
            return <Entertainment />;
        }
        if (currentPage === 'Donation') {
            return <Donation />;
        }
        if (currentPage === 'Search') {
            //create search results component that passes searchResults data in as prop
            return <SearchResults 
            searchResults={searchResults}></SearchResults>
        }
        if (currentPage === 'LoginOrSignup') {
            return <LoginOrSignup />;
        }

        // return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Title />
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} setSearchResults={setSearchResults} />
            {renderPage()}
        </div>
    );
}
