import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <header style = {headerStyle}>
        <h1><Link to = "/">Todo List</Link></h1>
        <Link to = "/">Home</Link> | <Link to = "/about">About</Link>
    </header>
}

const headerStyle = {
    textAlign: 'center',
    background: '#117A65',
    padding: '15px'
}
 
export default Header