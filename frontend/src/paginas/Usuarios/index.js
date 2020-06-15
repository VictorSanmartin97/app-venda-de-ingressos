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
                    <h1><FontAwesomeIcon icon="user"/> Usuários Cadastrados</h1>
                    <Link className="btn" to="/novousuarios">Novo Usuário</Link>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Administrador</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Gustavo</td>
                            <td>gustavo@baladapub.com</td>
                            <td>Não</td>
                            <td><FontAwesomeIcon icon="trash-alt"/></td>
                            <td><FontAwesomeIcon icon="user-edit"/></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Murilo</td>
                            <td>murilo@baladapub.com</td>
                            <td>Sim</td>
                            <td><FontAwesomeIcon icon="trash-alt"/></td>
                            <td><FontAwesomeIcon icon="user-edit"/></td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Victor</td>
                            <td>victor@baladapub.com</td>
                            <td>Não</td>
                            <td><FontAwesomeIcon icon="trash-alt"/></td>
                            <td><FontAwesomeIcon icon="user-edit"/></td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Willian</td>
                            <td>willian@baladapub.com</td>
                            <td>Sim</td>
                            <td><FontAwesomeIcon icon="trash-alt"/></td>
                            <td><FontAwesomeIcon icon="user-edit"/></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                </div>
            </main>
        </div>




    );

}