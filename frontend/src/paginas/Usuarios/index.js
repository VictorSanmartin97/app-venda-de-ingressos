import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import api from '../../services/api';
import './styles.css';
library.add(fas);


export default function Dashboard(){
    
    const user = localStorage.getItem('username');
    const [usuarios, setUsuarios] = useState([]);
    
    
    useEffect(() => {
        api.get('usuarios', {
            headers: {
                Authorization: user,
            }
        }).then(response => {
            setUsuarios(response.data);
        })
    }, []);

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
                            <th scope="col">Usuário</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(user => {
                                return(<tr>
                                <th scope="row">{user.id_usuario}</th>
                                <td>{user.login_usuario}</td>                           
                                <td><FontAwesomeIcon icon="trash-alt"/></td>
                                <td><FontAwesomeIcon icon="user-edit"/></td>
                                </tr>);
                            })}
                        </tbody>
                    </table>

                </div>
                </div>
            </main>
        </div>




    );

}