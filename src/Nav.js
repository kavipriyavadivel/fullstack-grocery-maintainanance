import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname); // Set the active link based on the current URL on initial render
    }, [location]);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className='nav-container'>
            <div className='color-nav'>
                <div className='nav-content'>
                    <ul className="nav-list">
                        <li className={`nav-item ${activeLink === '/updatestock' ? 'active' : ''}`}>
                            <Link to="/updatestock" className="nav-link" onClick={() => handleLinkClick('/updatestock')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>UPDATE STOCK</span>
                            </Link>
                        </li>
                        <li className={`nav-item ${activeLink === '/requeststock' ? 'active' : ''}`}>
                            <Link to="/requeststock" className="nav-link" onClick={() => handleLinkClick('/requeststock')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>REQUEST STOCK</span>
                            </Link>
                        </li>
                        <li className={`nav-item ${activeLink === '/issuestock' ? 'active' : ''}`}>
                            <Link to="/issuestock" className="nav-link" onClick={() => handleLinkClick('/issuestock')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>ISSUED STOCK</span>
                            </Link>
                        </li>
                        <li className={`nav-item ${activeLink === '/returnstock' ? 'active' : ''}`}>
                            <Link to="/returnstock" className="nav-link" onClick={() => handleLinkClick('/returnstock')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>RETURN STOCK</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;
