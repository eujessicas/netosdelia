import React from "react";
import './BlocoBlue.css'; 
import objetoImg1 from './imagens/text1.png';  
import objetoImg2 from './imagens/text2.png';  

const BlocoBlue = () => {
  return (
    <div className="blocoBlue">
      <div className = "titulo">
        <h1>O problema</h1>
        </div>
        <div className= "paragrafo">
        <h2>
          Muitas pessoas com mais de 50 anos enfrentam o mesmo desafio:
          a dificuldade em acompanhar o avanço tecnológico. Elas têm smartphones,
          mas não sabem como utilizá-los plenamente e sofrem com a falta de suporte técnico próximo.
        </h2>
      </div>
      <div className="images-container">
        <img src={objetoImg1} alt="Imagem 1" />
        <img src={objetoImg2} alt="Imagem 2" />
      </div>
    </div>
  );
};

export default BlocoBlue;


