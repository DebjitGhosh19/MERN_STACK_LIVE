

import './App.css'
import Users from './Users'
import NewUser from './NewUser'
import UserData from './Contex/UserContext'


function App() {

  return (
    <>
  <UserData>
  <NewUser/>
  <Users/>
  </UserData>
      
    </>
  )
}

export default App
