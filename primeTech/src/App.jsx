import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from './Components/Navbar'
import AllRouter from "./routes/AllRouter";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AllRouter />
      <h1>Add comments her yipee</h1>
      <h1>Develop by Utkarsh Singhal</h1>
    </div>
  );
}

export default App;
