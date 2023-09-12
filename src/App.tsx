import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="border">
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/page1" element ={<About />}/>
        <Route path="/page2" element ={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
