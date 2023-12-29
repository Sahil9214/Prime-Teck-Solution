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
    </div>
  );
}

export default App;
