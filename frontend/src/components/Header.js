import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar">
            <h1>Personal Blog</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">Create Post</Link>
            </div>
        </nav>
    );
};

export default Header;
