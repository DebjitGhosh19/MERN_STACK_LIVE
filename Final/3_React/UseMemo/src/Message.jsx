import { memo } from "react";


const Message = ({messageSend,incremenHandel}) => {
  
  return (<>
 <p>Message {messageSend} send</p>
 {console.log("Message")}
 <button onClick={incremenHandel}>incremetButton</button>
    </>
  )
}

export default memo(Message);