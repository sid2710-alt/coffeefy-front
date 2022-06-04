import react from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import Mixpanel from '../../Services/mixpanel'

import ApiConstants from "../../Services/apiconstants";

import "./signup.css";

export default function Signup() {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  const {
    register,
    handleSubmit,

  } = useForm();
  const onSubmit = async (data) => {
    Mixpanel("for signup" , data.email)
    await axios
      .post(ApiConstants.SIGNUP, {
        name: data.fullname,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log("res", res);
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
            text: "Signup is done",
            icon: "success",
            confirmButtonText: "Okay",
          });
        });
      })
      .catch((error) => {
       
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
      });
  };
  return (
    <>
    

      <div className="main-box signup border ">
        <h2 className="d-flex justify-content-center"> Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-body">
            <div className="mb-1">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="fullname"
                {...register("fullname")}
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="email"
                {...register("email")}
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="password"
                {...register("password")}
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Profile Pic</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                name="avtar"
                {...register("avtar")}
              />
            </div>

            <div className="row mr-1 ml-1">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>

            <div className="row ">
              <p className="pt-3 d-flex justify-content-center">
                Already on Register?
                <NavLink to="/login">
                  <span style={{ color: "" }}>Sign in </span>
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
