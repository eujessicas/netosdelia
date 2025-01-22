import React from "react";
import './blocoBlue.css'; 
import objetoImg1 from './imagens/text1.png';  
import objetoImg2 from './imagens/text2.png';  

const BlocoBlue = () => {
  return (
    <div>
      <div className="blocoBlue">
        <h1> O problema</h1>
        <h2>
          Muitas pessoas com mais de 50 anos enfrentam o mesmo desafio:
          a dificuldade em acompanhar o avanço tecnológico. Elas têm smartphones,
           mas não sabem como utilizá-los plenamente e sofrem com a falta de suporte técnico próximo.
        </h2>
      </div>
      <div>      
        <img src={objetoImg1} alt="print1" /> 
        <img src={objetoImg2} alt="print2" /> 
      </div>
    </div>
  );
};


export default BlocoBlue;


