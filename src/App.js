import React from "react"
import {Blog, Footer,Header, Possibility, Features, WhatGPT3} from "./containers";
import { Brand, Cta, Navbar} from "./components";
import "./App.css"
import "./index.css"
function App() {
  return (
    <div className="App">
      <div className="gradient__bg" >
        <Navbar/>
        <Header/>
      </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
    
    </div>
  );
}

export default App;
