import React from 'react'

function Header() {
    return <header style = {headerStyle}>
        <h1><a href = "index.html">Todo List</a></h1>
    </header>
}

const headerStyle = {
    textAlign: 'center',
    color: '#FFF',
    background: '#117A65',
    padding: '15px'
}
 
export default Header