import { memo } from "react";


const Message = ({messageSend}) => {
  
  return (<>
 <p>Message {messageSend} send</p>
 {console.log("Message")}
 
    </>
  )
}

export default memo(Message);