import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import CartContext from './CartContext'
import ApiConstants from '../Services/apiconstants'

const CartContextState = (props) => {

  const [productDetail , setProductDetail] = useState([])

  useEffect( async () => {

       await axios.get(ApiConstants.GET_ALL_CART_PROD ).then((res) => {
        console.log(res.data.products)
        setProductDetail(...productDetail , res.data.products)
       })


  },[])


  return (
    <>
      <CartContext.Provider value={productDetail}>
          
         {props.children}
         
       </CartContext.Provider>
    
    </>
  )
}

export default CartContextState