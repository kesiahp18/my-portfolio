import React from "react";
import photo1 from "../images/project-1.jpg"
import photo2 from "../images/project-2.jpg"
import photo3 from "../images/project-3.jpg"
import photo4 from "../images/project-4.jpg"
import photo5 from "../images/project-5.jpg"

const Works = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <a href="https://kesiahp18.github.io/run-buddy/" target="_blank">
                    <img className="d-block w-100" src={photo1} alt="First slide"/>
                </a>
            </div>
            <div className="carousel-item">
                <a href="https://akelstrom.github.io/taco-app/" target="_blank">
                    <img className="d-block w-100" src={photo2} alt="Second slide"/>
                </a>
            </div>
            <div className="carousel-item">
                <a href="https://kesiahp18.github.io/code-quiz/" target="_blank">
                    <img className="d-block w-100" src={photo3} alt="Third slide"/>
                </a>
            </div>
            <div className="carousel-item">
                <a href="https://polar-castle-13167.herokuapp.com/" target="_blank">
                    <img className="d-block w-100" src={photo4} alt="Fourth slide"/>
                </a>
            </div>
            <div className="carousel-item">
                <a href="https://my-wellness-journey.herokuapp.com/" target="_blank">
                    <img className="d-block w-100" src={photo5} alt="Fifth slide"/>
                </a>
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