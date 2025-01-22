import React from "react";
import './blocoBlue.css'; 
import objetoImg1 from './imagens/text1.png';  
import objetoImg2 from './imagens/text2.png';  

const BlocoBlue = () => {
  return (
    <div className="blocoBlue">
      <h1>O problema</h1>
      <h2>
        Muitas pessoas com mais de 50 anos enfrentam o mesmo desafio:
        a dificuldade em acompanhar o avanço tecnológico. Elas têm smartphones,
        mas não sabem como utilizá-los plenamente e sofrem com a falta de suporte técnico próximo.
      </h2>
      <img src={objetoImg1} alt="Pessoa com smartphone com dificuldades" />
      <img src={objetoImg2} alt="Imagem ilustrativa sobre o uso de tecnologia" />
    </div>
  );
};

export default BlocoBlue;



