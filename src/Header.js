import React from "react";
import './Header.css';
import logoImg from './imagens/logo.png';  // A importação da imagem

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <button>
                    <img src={logoImg} alt="Logo" />  {/* Usando logoImg importado */}
                </button>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Nosso projeto</a></li>
                    <li><a href="#about">Onde estamos</a></li>
                    <li><a href="#services">Voluntariado</a></li>
                    <li><a href="#contact">Seja um apoiador</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


    