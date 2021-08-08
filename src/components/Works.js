import React from "react";
import photo1 from "../images/project-1.png"
import photo2 from "../images/project-2.jpg"
import photo3 from "../images/project-3.png"
import photo4 from "../images/project-4.png"

const Works = () => {
    return (
        <div>
            <h1 className="title">MY WORK</h1>
            {/* First Project - My Wellness Journey */}
            <div className="image">  
                <a href="https://my-wellness-journey.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img className="project-image" src={photo1} alt="First project"/>
                </a>
            </div>
            <div className="caption">
                <h5 className="light-text">My Wellness Journey</h5>
                <p className="light-background"><a href="https://my-wellness-journey.herokuapp.com/" className="project-button" target="_blank" rel="noreferrer">View Deployed Application</a></p>
                <p className="light-background"><a href="https://github.com/Gintstir/My-Wellness-Journey" className="project-button" target="_blank" rel="noreferrer">View GitHub Repository</a></p>
            </div>

            {/* Second Project - Taco App */}

            <div className="image"> 
                <a href="https://akelstrom.github.io/taco-app/" target="_blank" rel="noreferrer">
                    <img className="project-image" src={photo2} alt="Second project"/>
                </a>
            </div>
            <div className="caption">
                <h5 className="light-text">Taco App</h5>
                <p className="light-background"><a href="https://akelstrom.github.io/taco-app/" className="project-button" target="_blank" rel="noreferrer">View Deployed Application</a></p>
                <p className="light-background"><a href="https://github.com/akelstrom/taco-app" className="project-button" target="_blank" rel="noreferrer">View GitHub Repository</a></p>
            </div>
            
            {/* Third Project - Tech Blog */}

            <div className="image"> 
                <a href="https://akelstrom.github.io/taco-app/" target="_blank" rel="noreferrer">
                    <img className="project-image" src={photo3} alt="Third project"/>
                </a>
            </div>
            <div className="caption">
                <h5 className="light-text">Tech Blog</h5>
                <p className="light-background"><a href="https://positivity-portal.herokuapp.com/" className="project-button" target="_blank" rel="noreferrer">View Deployed Application</a></p>
                <p className="light-background"><a href="https://github.com/kesiahp18/tech-blog" className="project-button" target="_blank" rel="noreferrer">View GitHub Repository</a></p>
            </div>

    </div>
    )
}

export default Works