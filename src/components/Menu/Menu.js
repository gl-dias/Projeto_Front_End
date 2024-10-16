import React, { useState, useEffect } from 'react';
import './Menu.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Função para lidar com a submissão da pesquisa
    const handleSearch = () => {
        console.log('Pesquisando por:', searchQuery);
        setSearchQuery(''); // Limpa a barra de pesquisa após o envio
    };

    // Função para detectar a tecla Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // IMPLEMENTAÇÃO DO DARK MODE
    const [isDarkMode, setIsDarkMode] = useState(true); // Começa no modo escuro
    const [isRotating, setIsRotating] = useState(false); // Estado para controlar a rotação do ícone

    // Carregar o modo escuro inicialmente se isDarkMode for true
    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        }
    }, []); // Esse efeito só roda uma vez, na montagem do componente

    // Função para alternar entre o modo claro e escuro
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        setIsRotating(true); // Inicia a rotação

        const body = document.body;

        if (isDarkMode) {
            body.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
        }

        setTimeout(() => {
            setIsRotating(false); // Para a rotação após 0.5s
        }, 500);
    };

    return (
        <header className="menu">
            <a href="/" className="logo">
                <img src="/Menu/lunosZoon.png" alt="Logo" />
            </a>

            <nav>
                <ul className="menu-items">
                    <li><a href="/Cursos">Cursos</a></li>
                    <li><a href="/Projetos">Projetos</a></li>
                    <li><a href="/SobreNos">Sobre Nós</a></li>
                    <li><a href="/FaleConosco">Fale Conosco</a></li>
                </ul>
            </nav>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Digite o projeto"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className="icon-button" onClick={handleSearch}>
                    <i className="fas fa-search"></i> {/* Ícone de lupa */}
                </button>
            </div>

            <button
                id="dark-mode-toggle"
                className={`dark-mode-button ${isRotating ? 'rotate' : ''}`}
                onClick={toggleDarkMode}
            >
                <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i> {/* Alterna entre sol e lua */}
            </button>
        </header>
    );
}

export default Menu;
