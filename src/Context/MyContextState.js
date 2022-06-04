import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import MyContext from '../Context/Mycontext'
import ApiConstants from '../Services/apiconstants'

const MyContextState = (props) => {

  const [productDetail , setProductDetail] = useState([])

  useEffect( async () => {

       await axios.get(ApiConstants.ALL_PRODUCT ).then((res) => {
        console.log(res.data.products)
        setProductDetail(...productDetail , res.data.products)
       })


  },[])


  return (
    <>
      <MyContext.Provider value={productDetail}>
          
         {props.children}
         
       </MyContext.Provider>
    
    </>
  )
}

export default MyContextState