import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"


const App = () => {
  return   <div className="w-screen h-screen">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  
}

export default App

