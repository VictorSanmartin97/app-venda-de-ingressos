import React from 'react';

function Sidemenu() {
    
    return(
    <div>            
        <div className="sidebar-logo">
            <img src="../imagens/logo-branco.png" alt=""/>
        </div>
               
        <div className="menu">
            <ul>
                <li>
                    <a href="#"> <i className="fas fa-cog"></i> Dashboard</a>
                </li>
                <li>
                    <a href="#"> <i className="fas fa-external-link-square-alt"></i> Cadastrar Evento</a>
                </li>
                <li>
                    <a href="#"> <i className="fas fa-calendar-alt"></i> Meus Eventos</a>
                </li>
                <li>
                    <a href="#"> <i className="fas fa-external-link-square-alt"></i> Cadastrar Ingresso</a>
                </li>
                <li>
                    <a href="#"> <i className="fas fa-ticket-alt"></i> Meus Ingressos</a>
                </li>
                <li>
                    <a href="#"> <i className="fas fa-flag-checkered"></i> Relatórios</a>
                </li>
            </ul>
        </div>
    </div>);
} 