import React from "react";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Loadding from "./loading";
import Contact from "./contact";
import Navbar from "./Navbar";

function App() {
 

  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path="" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path="/loading" element ={<Loadding/>}/>
        <Route path="/contact" element ={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App;
