import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="nav-bar" >
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "yellow"
                }} className="nav" to="/home">Home</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "yellow"
                }} className="nav" to="/about">About us</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "yellow"
                }} className="nav" to="/service">Services</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "yellow"
                }} className="nav" to="/contact">Contact us</NavLink>
            </nav>
        </div>
    );
};

export default Header;