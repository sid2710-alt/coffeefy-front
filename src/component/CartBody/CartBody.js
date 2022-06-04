import React ,{useContext} from "react";
import CartCard from "../CartCard/CartCard";

import CartContext from "../../Context/CartContext"


const CartBody = (props) => {

 const productDetail = useContext(CartContext)

 console.log("prod : " ,productDetail)



  return (
    <>  
     
      
        <div class="container-fluid d-flex justify-content-around flex-wrap">

         {
              productDetail.map( val => {       
                return(
                  <CartCard  key= {val._id} id = {val._id} data = {val}
                  name={val.name}  url={val.images} description={val.description}  price = {val.price} />
                  
                )
              })
            }  
    
      </div>
    </>
  );
};

export default CartBody;
