import React, { useState } from 'react';
import Navbar from './Navbar';
import NewsList from './NewsList';
import Business from './Business';
import Health from './Health';
import Sports from './Sports';
import Technology from './Technology';
import Entertainment from './Entertainment';
import Contact from './Contact'


export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('NewsList');
    const renderPage = () => {
        if (currentPage === 'NewsList') {
            return <NewsList />;
        }
        if (currentPage === 'Business') {
            return <Business />;
        }
        if (currentPage === 'Health') {
            return <Health />;
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

        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
