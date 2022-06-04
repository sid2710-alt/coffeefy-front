import React from "react";
import { useState  } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import Swal from "sweetalert2";
import ApiConstants from "../../Services/apiconstants";

import { BsStar } from "react-icons/bs";
import { CardState } from "../../Context/CardState";


const ProductDetail = () => {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());


const n = CardState.length
const res = CardState[n-1];

  const [value, setValue] = useState(1);

  const incValue = () => {
    setValue(value + 1);
  };
  const decValue = () => {
    setValue(value - 1);
  };


  const addToCart = () => {

    axios.post(ApiConstants.ADD_TO_CART , {
   
     name: res.data.name,
     description:res.data.description,
     price: res.data.price,
     rating: res.data.rating ,
     images:res.data.images[0].url,
     category: res.data.category
    }).then((res) => {
      console.log(res)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Added sucesfully',
        showConfirmButton: false,
        timer: 1500
      })
   
    }).catch((error) => {
   
     console.log(error)
   
    })
   
   }
   

  return (
    <>
  

      <div class="container " >
        <div class="row mt-4 mb-4  pt-4 pb-4 ">
          <img
        
             src={res.data.images[0].url || res.data.images}
            class=" col-md-4 img-thumbnail"
            alt="ProductImage"
          ></img>

          <div class="col-md-7 ml-1  border border-dark">
            <h2 class="text-left"> {res.data.name} </h2>
            <div class="row d-flex align-items-start flex-column ">
              <p class="fw-light">
               {res.data.description}
              </p>
              <div class="row">
                <div class="col">
                  <h4 class="text-left"> Price : Rs {res.data.price}</h4>
                </div>
                <div class="col">
                  <div class="d-flex justify-content-end bd-highlight ">
                    <h5 class="text-left"> Rating: </h5>
       
                    <BsStar class="ml-2"  size={30} />
                    <BsStar class="ml-3" size={30} />
                    <BsStar class="ml-3" size={30} />
                    <BsStar class="ml-3" size={30} />
                    <BsStar class="ml-3" size={30} />

                  </div>
                </div>
              </div>

              <div class="mt-1 mb-1">
                <h5 class="text-left" style={{ color: "green" }}>
                  Stock : {res.data.stock}
                </h5>
              </div>

              <div class="row">
                <p>Quantity:</p>
                <div class="d-flex justify-content-start ">
                  <div class="btn-group" role="group" aria-label="First group">
                    <button
                      type="button"
                      class="btn btn-outline-dark  "
                      onClick={decValue}
                    >
                      -
                    </button>
                    <span class=" ml-3 mr-3 mt-2">{value} </span>
                    <button
                      type="button"
                      class="btn btn-outline-success  "
                      onClick={incValue}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div class="row mt-5">
                <div class="btn-group" role="group" aria-label="First group">
                  <button type="button" class="btn btn-outline-dark " onClick={(e) => addToCart() } >
                    Add to Cart
                  </button>
                  <button type="button" class="btn btn-outline-warning ">
                    <NavLink
                      to="/payment"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      
           
                      Buy Now
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
