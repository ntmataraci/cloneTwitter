import {useState,useEffect} from "react"
const LeftOpenMenu = (props) =>{

const [closeWidth,setCloseWidth]=useState(true)    
const limitWidth = () =>{
setCloseWidth(false)
}

const menuSit=props.menuWidth
useEffect (()=>{
    setCloseWidth(true)
},[menuSit])

    return (
        <>

        <div style={closeWidth?{width:"50px",position:"fixed",top:"30px",left:"0",zIndex:"5",backgroundColor:"white",transition:"all 1s linear",overflow:"hidden"}:{position:"fixed",top:"30px",left:"0",zIndex:"5",backgroundColor:"white",width:"0",overflow:"hidden",transition:"all 1s linear"}}>
        <div style={{cursor:"pointer"}} onClick={limitWidth}>X</div>
        <div>Deneme</div>
        <div>Deneme</div>
        <div>Deneme</div>
        <div>Deneme</div>
        <div>Deneme</div>
        </div>
   
        </>
    )
}

export default LeftOpenMenu