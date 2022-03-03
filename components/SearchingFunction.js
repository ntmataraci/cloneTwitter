import { useEffect, useState } from "react"
import style from "./SearchingFunction.module.css"
import UserProfile from "./UserProfile"
const SearchingFunction = (props) =>{



useEffect(()=>{

console.log(myArray())
 },[props.query])

const myArray= () =>{ 
    if (props.query){
        return (props.data.filter(item=>item.user.toLowerCase().indexOf(props.query.toLowerCase())>-1))
    }
}

return (
<> 
{myArray()?
<div className={style.main}>
    Recent
    <UserProfile userList={myArray()}/>
</div>
:props.condition&&<div className={style.main} style={{height:"5rem"}}><div className={style.container}><div style={{display:"flex",fontSize:"0.8rem",justifyContent:"center",margin:"0.5rem auto",color:"var(--darkgrey)"}}>Try searching for people, topics, or keywords</div></div></div>
}
</>
)
}

export default SearchingFunction