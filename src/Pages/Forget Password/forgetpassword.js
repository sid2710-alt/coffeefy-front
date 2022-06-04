import react from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import Swal from 'sweetalert2'
import ApiConstants from "../../Services/apiconstants";

import "./forgetpassword.css";
import { NavLink } from "react-router-dom";

export default function ForgetPassword() {

 // window.addEventListener("contextmenu", (e) => e.preventDefault());

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {


       axios.post(ApiConstants.FORGET_PASSWORD , {

        email:data.email
       }).then((response) => { 
        console.log("res", response);
        let timerInterval;
        Swal.fire({
          title: "Loading ...",
          timer: 2500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {}, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          Swal.fire({
            title: "Success",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "Okay",
          });
        });

        setTimeout(() => {
          
          window.location.pathname = '/resetPassword'
        }, 5000);

       }).catch((error) => {
           
        let timerInterval;
        Swal.fire({
          title: "Loading...",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {}, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Okay",
          });
        });




       })


  }

  return (
    <>
    
    <div className="container" >
      <div className="main-box forgotPassword border">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 class="d-flex justify-content-center">Forgot Password ?</h2>
          <span class="d-flex justify-content-center">
            Reset password by email verification
          </span>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                id="email"
                className="form-control"
                type="email"
                {...register("email")}
              />
            </div>
          </div>
          <div className="row mr-3 ml-3">
            <button type="submit" className="btn btn-primary">
              Get Otp
            </button>
          </div>

          <div className="row ">
            <p className="pt-3 d-flex justify-content-center">
              <NavLink to="login" style={{ color: "#9b51e0" }}>
                Back
              </NavLink>
            </p>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
