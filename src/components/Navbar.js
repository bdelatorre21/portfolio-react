import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-item">
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    About
                </Link>
            </div>
            <div className="nav-item">
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Projects
                </Link>
            </div>
            <div className="nav-item">
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
