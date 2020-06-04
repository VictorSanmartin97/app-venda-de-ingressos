import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import './styles.css';
library.add(fas);


export default function Dashboard(){
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
                <div className="conteudo">
                <div className="tabela">
                <div className="topo">
                <div className="esq">
                <h1><FontAwesomeIcon icon="user"/> Cadastrando Usuário</h1>
                <p>Prencha as informações do seu novo usuário.</p>
                </div>
                
                <Link className="btn" to="/usuarios">Voltar</Link>
                <button type="submit" className="btn">Cadastrar</button>
                
                </div>
                
                    <div className="form">
                    <form>
                    <input type="text" placeholder="Nome" className="nomeEvento"/>
                    <input type="text" placeholder="E-mail" className="nomeEvento"/>  
                    <input type="text" placeholder="Usuário" className="nomeEvento"/>  
                    <input type="text" placeholder="Senha" className="nomeEvento"/>  
                    </form>
                    <p> Colocar checkbox para selecionar quando for administrador </p>
                    </div>  
                   
                </div> 
                </div>
            </main>
        </div>




    );

}