import React from "react";
import photo1 from "../images/project-1.png"
import photo2 from "../images/project-2.jpg"
import photo3 from "../images/project-3.png"
import photo4 from "../images/project-4.jpg"
import photo5 from "../images/project-5.png"

const Works = () => {
    return (
        <div>
            <h1 className="title">MY WORK</h1>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="carousel-image">   
                    <img className="d-block w-100 carousel-image" src={photo1} alt="First slide"/>
                </div>
                <div className="carousel-caption">
                    <h5>My Wellness Journey</h5>
                    <p><a href="https://my-wellness-journey.herokuapp.com/" className="carousel-button" target="_blank">View Deployed Application</a></p>
                    <p><a href="https://github.com/Gintstir/My-Wellness-Journey" className="carousel-button" target="_blank">View GitHub Repository</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <a href="https://akelstrom.github.io/taco-app/" target="_blank">
                    <img className="d-block w-100 carousel-image" src={photo2} alt="Second slide"/>
                </a>
                <div className="carousel-caption">
                    <h5>Taco App</h5>
                    <p><a href="https://akelstrom.github.io/taco-app/" className="carousel-button" target="_blank">View Deployed Application</a></p>
                    <p><a href="https://github.com/akelstrom/taco-app" className="carousel-button" target="_blank">View GitHub Repository</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <a href="https://glacial-headland-73425.herokuapp.com/" target="_blank">
                    <img className="d-block w-100 carousel-image" src={photo3} alt="Third slide"/>
                </a>
                <div className="carousel-caption">
                    <h5>My Movie Queue</h5>
                    <p><a href="https://glacial-headland-73425.herokuapp.com/" className="carousel-button" target="_blank">View Deployed Application</a></p>
                    <p><a href="https://github.com/kesiahp18/my-movie-queue/tree/master" className="carousel-button" target="_blank">View GitHub Repository</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <a href="https://polar-castle-13167.herokuapp.com/" target="_blank">
                    <img className="d-block w-100 carousel-image" src={photo4} alt="Fourth slide"/>
                </a>
                <div className="carousel-caption">
                    <h5>Tech News</h5>
                    <p><a href="" className="carousel-button" target="_blank">View Deployed Application</a></p>
                    <p><a href="https://github.com/kesiahp18/just-tech-news" className="carousel-button" target="_blank">View GitHub Repository</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <a href="https://positivity-portal.herokuapp.com/" target="_blank">
                    <img className="d-block w-100 carousel-image" src={photo5} alt="Fifth slide"/>
                </a>
                <div className="carousel-caption">
                    <h5>Tech Blog</h5>
                    <p><a href="https://positivity-portal.herokuapp.com/" className="carousel-button" target="_blank">View Deployed Application</a></p>
                    <p><a href="https://github.com/kesiahp18/tech-blog" className="carousel-button" target="_blank">View GitHub Repository</a></p>
                </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
    )
}

export default Works