import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ApiConstants from "../../Services/apiconstants";
import axios from 'axios'
import Swal from "sweetalert2"
import "./CartCard.css"


import { CardState } from "../../Context/CardState";

const CartCard = (props) => {
 

const handleClick = () => {

    CardState.push(props)

}

const removeToCart = () => {

 axios.delete(ApiConstants.REMOVE_TO_CART + `${props.id}`).then((res) => {
   console.log(res)

   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Remove From Cart Successfully',
    showConfirmButton: false,
    timer: 1500
  })

  window.location.reload(false);

 }).catch((error) => {

  console.log(error)

 })

}



  return (
    <>
         
      <div class="card mt-3 mb-3 d-flex flex-row">
        <div class="row mr-1">
          <div class="col mt-4 ml-3">
            <img src={props.url} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col ">
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              {localStorage.setItem("name", props.name)}
            
              <p class="card-text">
               {props.description}
              </p>
              <p> Price :Rs {props.price}</p>
              
            </div>
          </div>
          <div class="ml-1 mt-2 mb-2 row">
            <div class="btn-group" role="group" aria-label="First group">
              <button type="button" class="btn btn-outline-dark " onClick={(e) => removeToCart() }>
               Remove to Cart
              </button>
              <button type="button" class="btn btn-outline-warning " onClick={handleClick}>
                <NavLink
                  to= "/productDetail"
                  style={{ textDecoration: "none", color: "black" }}
                  >
                  Buy Now
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
                 
    </>
  );
};

export default CartCard;
