import style from "./CommentTweet.module.css"
import UserProfile from "./UserProfile"
import users from "../datas/users"
import { useState } from "react"
const CommentTweet = (props) =>{
const filteredData=users.filter(item=>item.user==props.user)
console.log(filteredData)
const replied = () =>{
props.upStateHandler(false)
}

const [isMsgExist,SetIsMsgExist]=useState(false)

const msgText = (e) =>{
    console.log(e.target.value.length)
    if (e.target.value.length>0){
    SetIsMsgExist(true)
    }else{
        SetIsMsgExist(false)
    }

}


    return (
        <>
        <div className={style.dropShadow} onClick={replied}></div>
        <div className={style.main}>
<div style={{margin:"1rem"}} onClick={replied}>X</div>
<UserProfile userList={filteredData}/>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
<div className={style.line__container}><div className={style.line}></div></div>
<div style={{width:"350px",fontSize:"0.6rem",margin:"1rem auto"}}>Replying to <span style={{color:"var(--blue)"}}>{filteredData[0].mail}</span></div>
</div>
<div>
<img src="/ntm.jpg" style={{width:"30px",height:"30px",marginRight:"2rem",borderRadius:"50%"}}></img>
<input type="text" placeholder="Tweet your reply" className={style.input} onChange={msgText} ></input>
</div>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem",textAlign:"center",justifyContent:"center",marginLeft:"5rem"}}>
<div><svg viewBox="0 0 24 24" aria-hidden="true" className={style.icon}><g><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg></div>
<div><svg viewBox="0 0 24 24" aria-hidden="true" className={style.icon} ><g><path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path><path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path></g></svg></div>
<div><svg viewBox="0 0 24 24" aria-hidden="true" className={style.icon}><g><path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"></path></g></svg></div>

    </div>
{isMsgExist?
<button className={style.button} onClick={replied}>Reply</button>:
<button disabled className={style.button} style ={{filter:"brightness(0.7)"}} onClick={replied}>Reply</button>
}
</div>
        </div>
        </>
    )
}

export default CommentTweet