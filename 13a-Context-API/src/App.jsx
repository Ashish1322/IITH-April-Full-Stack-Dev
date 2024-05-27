
import A from './components/A'
import { useState } from "react"

import userContext from './contexts/UserContext'
import AuthContext from './contexts/AuthContext'
import D from './components/D'

function App() {

  const [name, setName] = useState("Ashsih")
  const [user,setUser] = useState({email:"ak@gmail.com"})

  return (
    <div>
      <AuthContext.Provider value={{user}}>
        <D />
        <userContext.Provider value={{ name }}>
        <div>
          <h1>App</h1>
          <A />
        </div>
      </userContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default App
