
import style from "./UserProfile.module.css"
const UserProfile = (props) => {
const userList=props.userList

    return (
        <>
     
        {userList.map(item => 
        <div key={item.id} className={style.container}><div><img src={item.photo} className={style.photo}/> </div><div style={{display:"flex",flexDirection:"column"}}>
        <div className={style.user} >{item.user}</div>
       <div className={style.mail}> {item.mail}</div>
        </div>
        {props.AmIFollow&& 
        <button className={style.follow}>Follow</button>
        }
        </div>
        )}
      
        </>
    )
}

export default UserProfile