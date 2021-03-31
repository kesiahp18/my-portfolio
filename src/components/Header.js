import headshot from '../images/headshot.jpg'
import { React } from "react";

const About = () => {
    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1>FULL STACK WEB DEVELOPER</h1>
                <p>I am a current bootcamp student at Penn LPS coding bootcamp with experience working primarily with javascript to create front end, back end, and full stack applications.</p>
                <img className="headshot" src={headshot} alt="my headshot" />
            </div>
        </div>
    )
}

export default About;