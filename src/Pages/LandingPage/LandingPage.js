import React from 'react'

import { NavLink } from 'react-router-dom'

import slidePic4 from "../../Asset/slidePic4.jpg";
import slidePic5 from "../../Asset/slidePic5.jpg";
import slidePic6 from "../../Asset/slidePic6.jpg";

import './LandingPage.css'

const LandingPage = () => {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>

    
   <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-bs-ride="carousel"
        
      >

     <div class="carousel-indicators row">     
            <div class="row">
            <div class="btn-group d-flex justify-content-center" role="group" aria-label="First group">
          <NavLink to="/login">
          <button type="button" class="btn btn-outline-light  ">
              Login
          </button>
            </NavLink>

            <NavLink to="/signup" >
          <button type="button" class="btn btn-outline-warning ">
              Sign up    
          </button>
            </NavLink>
        </div>
            </div>

       <div class="row d-flex justify-content-center ">

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
        </div>

        <div class="carousel-inner " style={{marginBottom:"-1.5rem"}}>
          <div class="carousel-item active  control">
            <img
              src={slidePic4}
              class="d-block img-fluid "
              alt="..."
            
            />
          </div>
          <div class="carousel-item control  " >
            <img
              src={slidePic5}
              class="d-block img-fluid"
              alt="..."
            
            />
          </div>
          <div class="carousel-item  control">
            <img
              src={slidePic6}
              class="d-block img-fluid"
              alt="..."
            
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
        <div class="carousel-caption d-none d-md-block mb-5">
    <h1>Welcome To Coffeefy</h1>
  </div>
      </div> 
    </>
  )
}


export default LandingPage





