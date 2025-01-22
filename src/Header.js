import React from "react";
import './Header.css';
import logoImg from './imagens/logo.png'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <button onClick={() => window.location.href = './Header.js'}>
                    <img src={logoImg} alt="Logo" />
                </button>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="./nossoProjeto">Nosso projeto</a></li>
                    <li><a href="https://www.google.com.br/maps/preview">Onde estamos</a></li>
                    <li><a href="#services">Voluntariado</a></li>
                    <li><a href="#contact">Seja um apoiador</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


    