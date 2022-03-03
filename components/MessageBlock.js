// {user,mail,time,message,photo}

import UserTab from "./UserTab"
const MessageBlock = (props) => {

const myData=props.myData

return (
   <>

<UserTab messageArray={myData}/>
</> 
)

}


export default MessageBlock