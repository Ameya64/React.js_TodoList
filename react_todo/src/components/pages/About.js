import React from 'react'

  function About() {
    return (
        <React.Fragment>
            <div style = {about}>
            <h1>About</h1>
            <p>This is a Todo List App using React.js v1.0.0</p>
            </div>
        </React.Fragment>
    )
}
const about = {
    color: '#fff',
    fontFamily:'sans-serif'
}

export default About;
