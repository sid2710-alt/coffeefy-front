import react from "react";
import { Routes, Route} from "react-router-dom";

import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Signup/signup";
import ForgetPassword from "../Pages/Forget Password/forgetpassword";
import ResetPassword from "../Pages/ResetPassword/resetPassword";
import About from "../Pages/About/about";
import Help from "../Pages/Help/help";
import Contact from "../Pages/Contact/contact";
import ProductDetail from "../Pages/ProductDetail/productDetail";
import Payment from "../Pages/Payment/payment"
import LandingPage from "../Pages/LandingPage/LandingPage"
import CartItem from "../Pages/CartItem/CartItem";

export default function AllRoutes() {

   const loginSignupStatus = localStorage.getItem("loginSignupStatus") === 'true'? true: false

  return (
    <>
      
      <Routes>
     
     {loginSignupStatus === false ? <Route exact path="/" element={ <LandingPage/>} /> :<Route exact path="/" element = {<Home/> } /> } 


      {  loginSignupStatus &&<Route path='/' element={<Home/>} />}
  
        <Route exact path="/login" element={<Login />}/>
          
        <Route exact path="/signup" element ={ <Signup />} />
         
        <Route exact path="/forgotPassword" element={  <ForgetPassword />}/>
        
        <Route exact path="/resetPassword" element={<ResetPassword />}/>

        <Route exact path="/about" element={<About />} />
          
        <Route exact path="/contact" element={<Contact />}/>

        <Route exact path="/help" element={<Help />}/>
          
        <Route exact path="/productDetail" element = {<ProductDetail />} />
      
        <Route exact path="/payment" element={<Payment />} /> 
      
        <Route exact path="/cartItem" element = {<CartItem />} /> 
      </Routes>
    
      
    </>
  );
}
