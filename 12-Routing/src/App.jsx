import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"

import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react"
import ProtectedRoute from "./components/ProtectedRoute"
import ProfilePage from "./components/ProfilePage"

function App() {

  const [user,setUser] = useState({
    name: "Ashis"
  })

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute user={user} component={<Home />} />} />
        <Route path="/in/:username"  element={<ProfilePage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
