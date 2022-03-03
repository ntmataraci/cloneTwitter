import { useState,useRef } from "react"
import ReTweetLike from "./RetweetLike"
import style from "./UserTab.module.css"
const UserTab = (props) =>{



    return (
<>
{props.messageArray.map(item=>
        <div className={style.main} key={item.id} >
        <div style={{display:"flex",flexWrap:"wrap",borderBottom:"1px solid gray"}}>
            <div>
     <img src={item.photo} style={{borderRadius:"50%",width:"30px",height:"30px",marginRight:"5px"}}></img>
     </div>
     <div style={{display:"flex",flexWrap:"wrap",flexDirection:"column"}}>
     <div style={{display:"flex",flexWrap:"wrap"}}><div style={{marginRight:"1rem",fontWeight:"600",fontSize:"0.8rem"}}>{item.user}</div>  <div style={{color:"gray",fontSize:"0.9rem"}}>{item.mail}- {item.time}</div></div>
     <span>
     {item.message}
     </span>
<ReTweetLike like={item.like} retweet={item.retweet} comment={item.comment} user={item.user}/>
     </div>
     
     </div>
         </div>
)
}
         </>
    )
    
}

export default UserTab