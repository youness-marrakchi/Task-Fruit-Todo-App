import React from 'react'
import {Link} from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="javascript:void(0)">Task Fruit</a></li>
                <li style={{float: 'right', color: '#fff'}}><Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link></li>
            </ul>
        </div>
    )
}
const linkStyle = {
    color: '#fff',
    fontSize: '1rem',
    textDecoration: 'none'
}