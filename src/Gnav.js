import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Gnav = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className='nav-container'>
            <div className='color-nav'>
                <div className='nav-content'>
                    <ul className="nav-list">
                        <li className={`nav-item ${activeLink === '/updatestock' ? 'active' : ''}`}>
                            <a href="/gupdate" className="nav-link" onClick={() => handleLinkClick('/gupdate')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>UPDATE STOCK</span>
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === '/requeststock' ? 'active' : ''}`}>
                            <a href="/grequest" className="nav-link" onClick={() => handleLinkClick('/grequest')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>REQUEST STOCK</span>
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === '/issuestock' ? 'active' : ''}`}>
                            <a href="/gissue" className="nav-link" onClick={() => handleLinkClick('/gissue')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>ISSUED STOCK</span>
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === '/returnstock' ? 'active' : ''}`}>
                            <a href="/greturn" className="nav-link" onClick={() => handleLinkClick('/greturn')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>RETURN STOCK</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Gnav;
