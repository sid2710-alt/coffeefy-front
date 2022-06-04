import React ,{useContext} from "react";
import "./body.css";
import Card from "../Card/card";
import MyContext from "../../Context/Mycontext"





const Body = (props) => {

  
  const productDetail = useContext(MyContext)
  
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>  
     
      
        <div class="container-fluid d-flex justify-content-around flex-wrap">
        
            {
              productDetail.map( val => {
                      
                
                return(
                  <Card  key= {val._id} id = {val._id} data = {val}
                  name={val.name}  url={val.images[0].url} description={val.description}  price = {val.price} />
                  
                )
              })
            }
    
      </div>
   

 
    </>
  );
};

export default Body;
