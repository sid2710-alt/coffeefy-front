import react from "react";
import { useForm } from "react-hook-form";
import ApiConstants from "../../Services/apiconstants";
import Swal from "sweetalert2";
import axios from "axios";
import "./login.css";
import { NavLink } from "react-router-dom";
import Mixpanel from "../../Services/mixpanel"


const Login = () => {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
 
    Mixpanel("for login candidate" , data.email)
     axios.post(ApiConstants.LOGIN ,{
        email:data.email,
        password:data.password
        
      }).then((response) => {

         console.log("response : " ,response.data.user )

         localStorage.setItem("userData" , JSON.stringify(response.data))

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
             text: "Login Successfull",
             icon: "success",
             confirmButtonText: "Okay",
           });
         });

         localStorage.setItem("loginSignupStatus" , true )
         

        window.location.pathname= '/'

      }).catch((error) => {
          

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
            title: "Error",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Okay",
          });
        });


      })

  };
  return (
    <>
    
     <div className="container" >
        <div class="main-box login border"  >
        <h2 className="d-flex justify-content-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input id="email" class="form-control" {...register("email")} />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              id="password"
              class="form-control"
              type="password"
              {...register("password")}
            />
          </div>
          <div class="row">
            <div class="d-grid col-12 mx-auto">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-6">
            <p class="pt-3">
              <NavLink to="/forgotPassword">Forgot Password</NavLink>
            </p>
          </div>
          <div class="col-6">
            <p class="pt-3">
              <NavLink to="/signup">New User? Register</NavLink>
            </p>
          </div>
        </div>
      </div>
      </div>
   
    </>
  );
};

export default Login;
