import React from "react";
import Photo from "./components/Photo";
import "./App.css";

function App() {
 const temp_style = {
   border: "2px solid red",
 }
  return (
    <div className="App" style ={temp_style}>
      <h1>Astronomy Picture of the Day!</h1>
      <Photo/>
    </div>
  );
}

export default App;
