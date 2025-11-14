import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  setInterval(() => {
    //    var element3 = document.getElementById("t");
    // element3.classList.remove("t");

    
    setTimeout(()=>{
var element3 = document.getElementById("t");
      element3.classList.remove("t");

      var element = document.getElementById("f");
      element.classList.add("f");
    },)

    setTimeout(()=>{
      var element = document.getElementById("f");
    element.classList.remove("f");
      var element2 = document.getElementById("s");
      element2.classList.add("s");

    },1000)
    setTimeout(()=>{
var element2 = document.getElementById("s");
    element2.classList.remove("s");

      var element3 = document.getElementById("t");
      element3.classList.add("t");
    },2000)

  }, 3000);


  return (
    <>
      <div id="m" className="main">
        <div id="x" className="first">
          <div id="f"></div>
        </div>
        <div className="first-1"></div>

        <div className="second">
          <div id="s"></div>
        </div>
        <div className="first-1"></div>

        <div className="third">
          <div id="t"></div>
        </div>
        <div className="first-1"></div>
      </div>
    </>
  );
}

export default App;
