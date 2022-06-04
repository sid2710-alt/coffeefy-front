import React , {useEffect} from "react";
import Body from "../../component/Body/body";
import Slide from "../../component/Slide/slide";
import Mixpanel from '../../Services/mixpanel'



const home = () => {


  //inspect ko protect krta h
  //window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>

    {Mixpanel("open page" ,"user visiting")}
      <Slide />
      <Body />
    </>
  );
};

export default home;
