import React from 'react'

function Header() {
    return <header style = {headerStyle}>
        <h1>Todo List</h1>
    </header>
}

const headerStyle = {
    textAlign: 'center',
    color: '#FFF',
    background: '#333',
    padding: '15px'
}
 
export default Header