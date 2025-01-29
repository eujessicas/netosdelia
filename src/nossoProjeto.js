import React from "react";
import './NossoProjeto.css';
import logoImg from './imagens/logo.png'; 
import idososimg from './imagens/idosos.png';

const Header = () => {
    return (
        <header className="nossoProjeto" >
        <div>
            <h1>Nosso projeto</h1>
            <h2> Temos uma missão simples e transformadora: oferecer inclusão digital para pessoas 
                com mais de 50 anos atraces de um cuso introdutorio focado no uso basico de smartphones.
                 Com aulas teóricas e praricas, cada módulo terá uma breve ecplicação, 
                 seguida de exercicios práticos.</h2>
        </div>
        <div className="logo">
                <img src={logoImg} alt="Logo" />
            </div>
            <div className="idosos-image">
                <img src={idososimg} alt="Idosos" />
            </div>
    </header>

    )
    
}

export default Header;