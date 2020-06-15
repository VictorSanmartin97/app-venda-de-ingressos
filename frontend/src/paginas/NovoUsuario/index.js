import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';
import logoImg from '../../imagens/logo-branco.png';
import './styles.css';
library.add(fas);


export default function NovoUsuario() {
    const [login_usuario, setLogin_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');
    const [is_admin, setIs_admin] = useState('');
    const data_cadastro = new Date();

    const history = useHistory('');

    async function handlerCreateUser(e) {
        e.preventDefault();

        const data = {
            login_usuario,
            senha_usuario,
            data_cadastro,
            is_admin,
        };

        try {
            await api.post('usuario', data);

            alert(`Seu cadastro foi realizado com sucesso`);

            history.push('/');
        } catch (err) {
            alert('Não deu certo, tente novamente');
        }

    }


    return (
        <div className="dashboard">
            <sidebar>
                <div className="sidebar-logo">
                    <img src={logoImg} />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/dashboard"> <FontAwesomeIcon icon="cog" /> Dashboard </Link>
                        </li>
                        <li>
                            <Link to="/cadastrarevento"> <FontAwesomeIcon icon="external-link-square-alt" /> Cadastrar Evento </Link>
                        </li>
                        <li>
                            <Link to="/meuseventos"> <FontAwesomeIcon icon="calendar-alt" /> Meus Eventos </Link>
                        </li>
                        <li>
                            <Link to="/cadastraringresso"> <FontAwesomeIcon icon="external-link-square-alt" /> Cadastrar Ingresso </Link>
                        </li>
                        <li>
                            <Link to="/meusingressos"> <FontAwesomeIcon icon="ticket-alt" /> Meus Ingressos </Link>
                        </li>
                        <li>
                            <Link to="/relatorios"> <FontAwesomeIcon icon="flag-checkered" /> Relatórios </Link>
                        </li>
                        <li>
                            <Link to="/usuarios"> <FontAwesomeIcon icon="user" /> Usuários </Link>
                        </li>

                    </ul>
                </div>
            </sidebar>
            <main>
                <header>
                    <Link to="/dashboard"> <FontAwesomeIcon icon="cog" /> Dashboard </Link>
                    <Link to="/"> <FontAwesomeIcon icon="sign-out-alt" /> Logout </Link>

                </header>
                <div className="conteudo">
                    <div className="tabela">
                        <div className="topo">
                            <div className="esq">
                                <h1><FontAwesomeIcon icon="user" /> Cadastrando Usuário</h1>
                                <p>Prencha as informações do seu novo usuário.</p>
                            </div>


                        </div>

                        <div className="form">
                            <form onSubmit={handlerCreateUser}>
                                <input type="text" 
                                    placeholder="Usuário" 
                                    className="nomeEvento"
                                    value={login_usuario} 
                                    onChange={e => setLogin_usuario(e.target.value)} />
                                <input type="password" 
                                    placeholder="Senha" 
                                    className="nomeEvento"
                                    value={senha_usuario} 
                                    onChange={e => setSenha_usuario(e.target.value)} />
                                <button type="submit" className="btn">Cadastrar</button>
                            </form>                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}