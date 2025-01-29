import React from "react";
import './App.css';
import Header from './Header'; 
import Topo from './Topo';
import BlocoBlue from "./BlocoBlue";
import NossoProjeto from "./NossoProjeto";


function App() {
  return (
    <div>
      <Header />  
      <Topo />
      <main>
        <BlocoBlue />
        <NossoProjeto />
      </main>
    </div>
  );
}

export default App;
