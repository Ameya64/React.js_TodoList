import React from 'react'
import {Link} from 'react-router-dom'

  function About() {
    return (
        <React.Fragment>
            <div style = {about}>
            <h1>About</h1>
            <p>This is a Todo List Web App (v1.0.0)<br/> <em>created by</em> <a style = {about} href = "https://www.linkedin.com/in/iameya"><strong>Ameya Ingale</strong></a> <br />using <strong>React.js</strong></p>
            </div>
        </React.Fragment>
    )
}
const about = {
    color: '#fff',
    fontFamily:'sans-serif',
    //textAlign: 'center'
}

export default About;
