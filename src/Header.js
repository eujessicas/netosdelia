import React from "react";
import './Header.css';

const Header = () => {
    return(
        <header className="header">
            <div className="logo"> 
                <h1>Netos de Lia</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href= "#home">Nosso projeto</a></li>
                    <li><a href= "#about">Onde estamos</a></li>
                    <li><a href= "#services">Voluntariado</a></li>
                    <li><a href= "#contact">Seja um apoiador</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header


    