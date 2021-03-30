import React from "react";

const Works = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="../images/project-1.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../images/project-2.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../images/project-3.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../images/project-4.jpg" alt="Fourth slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../images/project-5.jpg" alt="Fifth slide"/>
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
      </div>)
}

export default Works