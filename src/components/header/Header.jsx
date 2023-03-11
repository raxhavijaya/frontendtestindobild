import React, {useState} from "react";
import "./header.css";
import { motion } from "framer-motion";

import logo from "../../assets/images/eventin.png";
import { Link } from "react-router-dom";

import { Navbar,  NavItem, NavLink, Nav } from "reactstrap";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <Navbar>
        <Nav className="nav__wrapper">
          <NavItem className="logo">
            <Link to="/">
              <motion.img whileTap={{ scale: 1.1 }} src={logo} alt="logo" />
            </Link>
          </NavItem>
          <NavItem className="search__box">
            <span>
              <i className="ri-search-line"></i>
            </span>
            <input type="text" placeholder="Search your venue location" />
          </NavItem>
          <NavItem className="nav__item">
            <NavLink>Explore Event</NavLink>
          </NavItem>
          <NavItem className="nav__item">
            <NavLink>Help</NavLink>
          </NavItem>
          <span></span>
          <NavItem className="nav__btn1">
            <NavLink>Create Event</NavLink>
          </NavItem>
          <NavItem className="nav__btn2">
            <NavLink>Sign In</NavLink>
          </NavItem>
          <nav>
      <div className="navbar-toggle" onClick={toggleMenu}></div>
      <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
        <li><a href="#">Explore Event</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Create Event</a></li>
        <li><a href="#">Sign In</a></li>
        <span className="close-btn" onClick={toggleMenu}>X</span>
      </ul>
    </nav>
        </Nav>
        
      </Navbar>
      
    </header>
  );
};

export default Header;
