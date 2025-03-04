import { createContext,useState } from "react";

export const UserContext=createContext({});

const UserData=({children})=>{
  const [users, setUsers] = useState([{id:1,userName:"Debjit"},{id:2,userName:"Ram Dev"}]);
  return <UserContext.Provider value={{users,setUsers}}>
    {children}
  </UserContext.Provider>
}
export default UserData;