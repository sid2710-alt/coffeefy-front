import React ,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartContext from '../../Context/CartContext'
import Mixpanel from "../../Services/mixpanel";

const Navbar = () => {

  // window.addEventListener("contextmenu", (e) => e.preventDefault());


    const loginSignupStatus = localStorage.getItem("loginSignupStatus") === 'true'? true: false

    const userData = JSON.parse( localStorage.getItem("userData")) || " "

    // const userName = (userData.user.name).slice(0,3) 
   
    const cartDetail = useContext(CartContext)
    const totalCart = cartDetail.length


    
 
    const handleLogout = () => {

      localStorage.clear()
      window.location.pathname = '/'
    }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="/">
          {Mixpanel("home page reached" , "home")}
      <img src="https://res.cloudinary.com/drpmtab2a/image/upload/c_scale,h_221,r_28/a_0/v1647862267/BevragesProduct%20image/1307710801_dqboxj.png" alt="" width="40" height="40" class="d-inline-block align-text-top"/>
       <h2>Coffeefy </h2>
    </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/help">
                Help
              </a>
            </li>
          </ul>
        </div>
         

        <div class="row mt-1 mr-2"> 
          
        { loginSignupStatus && <div class="btn-group" role="group" aria-label="First group">
              <button  class="btn btn-outline-dark " onClick={ handleLogout }>
                Logout
              </button>
              <button type="button" class="btn btn-outline-warning ">
                 { userData.user.name} 
                
              </button>
              <NavLink to="/cartItem">
              <button type="button" class="btn btn-outline-success ">
                 <HiOutlineShoppingCart/>
                <span>{totalCart}</span>
              </button>
              </NavLink>

            </div>      
           }
           
          </div>
  
      </nav>
    </>
  );
};

export default Navbar;
