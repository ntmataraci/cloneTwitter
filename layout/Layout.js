import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar"
import Messages from "../UI/Messages";
import Main from "./Main"
import { useState,useEffect } from "react";
import Header from "../mobile/Header";
import MessageBlock from "../components/MessageBlock"
import messages from "../datas/messages";
import LeftOpenMenu from "../mobile/LeftOpenMenu";
import Bottom from "../mobile/Bottom";
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
    
const [menuOp,setMenuOp]=useState(false)
const menuSit = (x) =>{ 
setMenuOp(x)
}
//width under is mobile
return(
    
        <>
        {windowSize.width<600?
        <>
        <Header getMenuOp = {menuOp} menuHandler={menuSit}/>

        <LeftOpenMenu menuWidth={menuOp} />

        <MessageBlock myData={messages}/>
        <Bottom/>
        </>
        :

<div style={{display:"flex",flexWrap:"wrap"}}>
<LeftSideBar getSize={windowSize}/>
<Main>
    {children}
    </Main>
  {windowSize.width>1000&& <RightSideBar/>}
    <Messages/>
</div>
}

</>
    )
}

export default Layout