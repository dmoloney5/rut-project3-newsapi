import React, { useState } from 'react';
import Navbar from './Navbar';
import NewsList from './NewsList';
import Business from './Business';
import Sports from './Sports';
import Technology from './Technology';
import Entertainment from './Entertainment';
import Contact from './Contact'
import Donation from './Donation';
import SearchResults from './SearchResults';


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

        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} setSearchResults={setSearchResults} />
            {renderPage()}
        </div>
    );
}
