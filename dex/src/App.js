import "./App.css";
//this is thr main entry point
import Header from "./components/Header";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import Liquidity from "./components/Liquidity"
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Header/> 
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap/>}/>
          <Route path="/tokens" element={<Tokens/>} />
          <Route path="/liquidity" element={<Liquidity/>}/>
        </Routes>

      </div>
      </div>
  )
 
}

export default App;
