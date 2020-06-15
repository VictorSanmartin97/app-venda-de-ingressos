import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import './styles.css';
library.add(fas);

export default function Dashboard(){
    
    const user = localStorage.getItem('username');
    
    return (
        <div className="dashboard">
            <sidebar>
                <div className="sidebar-logo">
                    <img src={logoImg}/>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/dashboard"> <FontAwesomeIcon icon="cog"/> Dashboard </Link>
                        </li>
                        <li>
                            <Link to="/cadastrarevento"> <FontAwesomeIcon icon="external-link-square-alt"/> Cadastrar Evento </Link>
                        </li>
                        <li>
                            <Link to="/meuseventos"> <FontAwesomeIcon icon="calendar-alt"/> Meus Eventos </Link>
                        </li>
                        <li>
                            <Link to="/cadastraringresso"> <FontAwesomeIcon icon="external-link-square-alt"/> Cadastrar Ingresso </Link>
                        </li>
                        <li>
                            <Link to="/meusingressos"> <FontAwesomeIcon icon="ticket-alt"/> Meus Ingressos </Link>
                        </li>
                        <li>
                            <Link to="/relatorios"> <FontAwesomeIcon icon="flag-checkered"/> Relatórios </Link>
                        </li>
                        <li>
                            <Link to="/usuarios"> <FontAwesomeIcon icon="user"/> Usuários </Link>
                        </li>
                        
                    </ul>
                </div>
            </sidebar>
            <main>
                <header>
                    <Link to="/dashboard"> <FontAwesomeIcon icon="cog"/> Dashboard </Link>
                    <Link to="/"> <FontAwesomeIcon icon="sign-out-alt"/> Logout </Link>

                </header>
                <div class="conteudo">
                    <div className="central">
                        <div className="box-prox-evento">
                            <h1><FontAwesomeIcon icon="calendar-alt"/> Próximo Evento</h1>
                            <br></br>
                            <h2> Balada Hawaiana</h2>
                            <p>Abaixo número de ingressos já vendidos.</p>
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Universitário
                                        <span class="badge badge-primary badge-pill">97</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Pista 1º Lote
                                        <span class="badge badge-primary badge-pill">28</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Pista 2º Lote
                                        <span class="badge badge-primary badge-pill">0</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Camarote
                                        <span class="badge badge-primary badge-pill">17</span>
                                    </li>
                                </ul>

                        </div>
                        <div className="box-ingressos">
                            <h1><FontAwesomeIcon icon="external-link-square-alt"/> Seus ingressos mais vendidos.</h1>
                            <br></br>
                            <p>OBS:Criar uma listagem com os ingressos mais vendidos, pegando todos os vendidos em todos os eventos fazer tipo um ranking do mais vendido.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>




    );

}