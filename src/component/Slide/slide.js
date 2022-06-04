import React from "react";

import slidePic1 from "../../Asset/slidePic1.jpg";
import slidePic2 from "../../Asset/slidePic2.jpg";
import slidePic3 from "../../Asset/slidePic3.jpg";

import "./slide.css";

const slide = () => {
  return (
    <>
    
      <div
        id="carouselExampleIndicators"
        class="carousel slide h-50"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner cont">
          <div class="carousel-item active">
            <img
              src={slidePic1}
              class="d-block "
              alt="..."
              height="400"
              width="700"
            />
          </div>
          <div class="carousel-item">
            <img
              src={slidePic2}
              class="d-block "
              alt="..."
              height="400"
              width="700"
            />
          </div>
          <div class="carousel-item">
            <img
              src={slidePic3}
              class="d-block"
              alt="..."
              height="400"
              width="700"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     
    </>
  );
};

export default slide;
