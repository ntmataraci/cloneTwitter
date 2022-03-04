import {useState} from "react"
const Header = (props) => {



const menuHandler = () =>{

   props.menuHandler(!props.getMenuOp)
}
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",width:"90vw",marginBottom:"2rem"}}>
           <div style={{cursor:"pointer"}} onClick={menuHandler}> <img src="/ntm.jpg" style={{width:"30px",height:"30px",borderRadius:"50%"}}></img></div>
           <div >  Home </div>
        </div>
    )
}

export default Header