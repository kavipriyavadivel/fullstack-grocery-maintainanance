import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(window.location.pathname); // Set the active link based on the current URL on initial render
    }, []);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className='nav-container'>
            <div className='color-nav'>
                <div className='nav-content'>
                    <ul className="nav-list">
                        <li className={`nav-item ${activeLink === '/aitem' ? 'active' : ''}`}>
                            <a href="/aitem" className="nav-link" onClick={() => handleLinkClick('/aitem')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>ITEM</span>
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === '/admingreq' ? 'active' : ''}`}>
                            <a href="/admingreq" className="nav-link" onClick={() => handleLinkClick('/admingreq')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>GIRLS REQUEST</span>
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === '/adminrequest' ? 'active' : ''}`}>
                            <a href="/adminrequest" className="nav-link" onClick={() => handleLinkClick('/adminrequest')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>BOYS REQUEST</span>
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === '/admindreq' ? 'active' : ''}`}>
                            <a href="/admindreq" className="nav-link" onClick={() => handleLinkClick('/admindreq')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>DAYSCHOLAR REQUEST</span>
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === '/co' ? 'active' : ''}`}>
                            <a href="/co" className="nav-link" onClick={() => handleLinkClick('/co')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>CONSUMED GOODS</span>
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === '/ro' ? 'active' : ''}`}>
                            <a href="/ro" className="nav-link" onClick={() => handleLinkClick('/ro')}>
                                <i className='bi bi-speedometer2'></i>
                                <span className='nav-text'>RETURN GOODS</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
