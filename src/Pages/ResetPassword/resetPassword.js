import React from "react";
import { useForm } from "react-hook-form";



const ResetPassword = () => {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  const {
    register,
    handleSubmit,
 
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>

      <div className="main-box forgotPassword border">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 class="d-flex justify-content-center">Reset your Password</h3>
          <span style={{ color: "#9b51e0" }}>
            Use the OTP sent to your email to set your new password. Please
            check your spam folder if you don't find email in your inbox
          </span>

          <div className="modal-body">
            <div className="">
              <label className="form-label">Email</label>
              <input
                type="text"
                disabled
                className="form-control"
                {...register("email")}
              />
            </div>
            <div className="mt-1">
              <label className="form-label">OTP</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter OTP"
                {...register("otp")}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">New Password</label>
              <input
                id="password"
                className="form-control"
                placeholder="New Password"
                {...register("password")}
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="form-label">Confirm New Password</label>
              <input
                id="password"
                className="form-control"
                placeholder="confirm password"
                type="password"
                {...register("confirmPassword")}
              />
            </div>
            <div className="row mr-1 ml-1 ">
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </div>
            <div className="row ">
              <p className="pt-2 d-flex justify-content-center">
                <span style={{ color: "#9b51e0" }}>Back</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
