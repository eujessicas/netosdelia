// App.js
import React from "react";
import './App.css';
import Header from './Header';  // Certifique-se de que está importando corretamente
import Topo from './Topo';      // Importando corretamente o componente Topo

function App() {
  return (
    <div>
      <Header />  {/* Aqui, o componente Header está sendo utilizado */}
      <Topo />
      <main>
      
      </main>
    </div>
  );
}

export default App;
