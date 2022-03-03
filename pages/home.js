import { useState } from "react"
import AddingMsg from "../components/AddingMsg"
import WhatsHappening from "../UI/WhatsHappening"
import messages from "../datas/messages"
import MessageBlock from "../components/MessageBlock"

const Home = () =>{

const [message,setMessage]=useState()


    const myMsgHandler = (e)=>{
    setMessage(e)
    }



    return (
        <>
      
        <h3>Home</h3>
        <WhatsHappening myMsg={myMsgHandler} />
        {message && <AddingMsg sendMsg={message}  />}
        <MessageBlock myData={messages}/>
            
            
        
        </>
    )
}

export default Home