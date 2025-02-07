import Card from "./Components/Card"
import data from "./data.json"
import { FaFacebookSquare, FaInstagram  } from "react-icons/fa";

function App() {
  return (
    <>
    {
      data.map((item)=>{
        return (
          <Card
            title={item.title}
            description={item.dec}
          />
        );
      })
    }
    <div>
    <FaFacebookSquare />
    < FaInstagram />

    </div>
    
    </>
  )
}

export default App
