import UserProfile from "./UserProfile"
import messages from "../datas/messages"

const WhoToFollow= () =>{
    return (
        <>
<div style={{fontWeight:"bold",marginBottom:"1rem"}}>Who to follow</div>
<div style={{display:"flex",gap:"1rem",flexDirection:"column"}}>
<UserProfile userList={messages} AmIFollow={true} />
</div>
</>
    )
}
export default WhoToFollow