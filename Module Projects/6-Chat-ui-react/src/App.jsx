
import Leftbar from "./components/Leftbar.jsx"
import Rightbar from "./components/Rightbar.jsx"

import "./App.css"

export default function App() {
  

  return (
    <div className="container">
      <div className="row mt-4 rounded bg-white shadow-sm">
        <Leftbar />
        <Rightbar />
      </div>
    </div>
  )
}

