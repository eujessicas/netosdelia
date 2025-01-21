// Topo.js
import React from "react";
import './Topo.css';

// Importando a imagem diretamente
import objetoImg from './imagens/objeto.png';

const Topo = () => {
    return (
        <header className="Topo">
            <div className="TOPO">
                <h1>“ -Quem tá ensinando o povo a mexer no celular?  - Os Netos de Lia! “</h1>
                <h3>Projeto de inclusão digital para pessoas com mais de 50 anos através de um curso focado no uso básico de smartphones.</h3>
                <div className="img"> {/* Contêiner para a imagem */}
                    <img src={objetoImg} alt="idosos" />
                </div>
            </div>
        </header>
    );
}

export default Topo;

