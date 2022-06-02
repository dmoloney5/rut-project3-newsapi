import React, { useState } from 'react';
import Nav from './Navbar';
import Homepage from "./homepage/Homepage"


export default function Newsapi() {
    const [currentPage, setCurrentPage] = useState('Homepage');

    const renderPage = () => {
        if (currentPage === 'Homepage') {
            return <Homepage />;
        };      

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )}
    };
