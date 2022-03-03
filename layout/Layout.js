import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar"
import Messages from "../UI/Messages";
import Main from "./Main"
import { useState,useEffect } from "react";
const Layout = ({children}) =>{

    const [windowSize,setWindowSize]=useState({
        width:undefined,
        height:undefined
      })
     
      const handleResize = () =>{setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight
      }
      )}
    
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {window.removeEventListener("resize", handleResize);
        }
      }, [windowSize]);
    
      useEffect(()=>{
        handleResize()
      },[])
    



return(
    
        <>
<div style={{display:"flex",flexWrap:"wrap"}}>
<LeftSideBar getSize={windowSize}/>
<Main>
    {children}
    </Main>
  {windowSize.width>1000&& <RightSideBar/>}
    <Messages/>
</div>


</>
    )
}

export default Layout