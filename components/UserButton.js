import style from "./UserButton.module.css"
const UserButton = ( )=>{
    return (
       
        <div className={style.main}>
<div style={{height:"40px"}} ><img className={style.photo} src="/ntm.jpg"></img></div>
<div className={style.nickName}><div className={style.nickName__rows} style={{fontWeight:"700",color:"rgb(15, 20, 25)"}}>Ntmataraci</div>
<div className={style.nickName__rows} style={{fontWeight:"400",color:"rgb(83, 100, 113)"}}>@ntmataraci</div>
</div>
<div className={style.icon__container}>
<svg viewBox="0 0 24 24" aria-hidden="true" className={style.icon}><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
</div>
        </div>
        
     
    )
}


export default UserButton