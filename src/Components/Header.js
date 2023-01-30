import React from 'react';
import './Style.css';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {

    return (
        <div>
            <header>
                <div className="sidebar">
                    <div className="profile text-center">
                        <div className="avtar">
                            <img src="images/avatar.jpg" alt="avatar" />
                        </div>
                        <h1 className="text-center">Bansi Gadhiya</h1>
                        <div className="social mx-auto">
                            <ul className="d-flex">
                                <li>
                                    <a href="#"><i className="fa-brands fa-twitter" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa-brands fa-instagram" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <a className='text-white'>
                                        <i className="fa-solid fa-house pe-2" />
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='text-white'>
                                        <i className="fa-regular fa-user pe-2" />
                                        <span>About</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='text-white'>
                                        <i className="fa-regular fa-file pe-2" />
                                        <span>Portfolio</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='text-white'>
                                        <i className="fa-solid fa-server pe-2" />
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='text-white'>
                                        <i className="fa-solid fa-phone pe-2" />
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <div className='menu'>
                        <Navbar>
                            <Nav>
                                <NavLink to="/">
                                    <p className='text-white'>
                                        <i className="fa-solid fa-house pe-2" />
                                        <span>Home</span>
                                    </p>
                                </NavLink>
                                <NavLink to="/about">
                                    <p className='text-white'>
                                        <i className="fa-regular fa-user pe-2" />
                                        <span>About</span>
                                    </p>
                                </NavLink>
                                <NavLink to="/portfolio">
                                    <p className='text-white'>
                                        <i className="fa-regular fa-file pe-2" />
                                        <span>Portfolio</span>
                                    </p>
                                </NavLink>
                                <NavLink to="/services">
                                    <p className='text-white'>
                                        <i className="fa-solid fa-server pe-2" />
                                        <span>Services</span>
                                    </p>
                                </NavLink>
                                <NavLink to="/contact">
                                    <p className='text-white'>
                                        <i className="fa-solid fa-phone pe-2" />
                                        <span>Contact</span>
                                    </p>
                                </NavLink>
                            </Nav>
                        </Navbar>
                    </div> */}
                </div>
            </header>

        </div>
    )
}

export default Header
