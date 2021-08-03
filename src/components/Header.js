import headshot from '../images/headshot.jpg'
import { React } from "react";

const About = () => {
    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1 className="title">FULL STACK WEB DEVELOPER</h1>
                <p>
                Creative and forward-thinking full stack web developer and designer fluent in Javascript and Node.js. Adaptable and driven with a strong work ethic and ability to thrive in team-based or individually motivated settings.
                </p>
                <img className="headshot" src={headshot} alt="my headshot" />
            </div>
        </div>
    )
}

export default About;