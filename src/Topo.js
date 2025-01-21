import React from "react";
import './Topo.css';

import objetoImg from './imagens/objeto.png';

const Topo = () => {
    return (
        <header className="Topo">
            <div className="TOPO">
              
                <div>
                    <h1>“ -Quem tá ensinando o povo a mexer no celular? - Os Netos de Lia! “</h1>
                    <h3>Projeto de inclusão digital para pessoas com mais de 50 anos através de um curso focado no uso básico de smartphones.</h3>
                </div>
                
                <div className="img">
                    <img src={objetoImg} alt="idosos aprendendo tecnologia" />
                </div>
            </div>
       
            <div className="Button">
                <button>Encontre um projeto perto de você</button>
            </div>
        </header>
    );
};

export default Topo;
