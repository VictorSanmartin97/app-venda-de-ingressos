import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import DatePicker from 'react-datepicker';
import api from '../../services/api';
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css';
library.add(fas);

export default function Dashboard(){
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const id_cliente = 1;
    const data_cadastro = new Date();
   
    async function handlerUser(e){
        e.preventDefault();

        const data = {
            id_cliente,
            username,
            senha,
            data_cadastro,
            isAdmin
        };

        try{
            const response = await api.post('usuario', data);

            alert(`Seu cadastro foi realizado com sucesso ${response.data.username}`);
        } catch(err){
            alert('Não deu certo, tente novamente');
        }

    }

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
                        
                    </ul>
                </div>
            </sidebar>
            <main>
                <header>
                    <Link to="/dashboard"> <FontAwesomeIcon icon="cog"/> Dashboard </Link>
                    <Link to="/"> <FontAwesomeIcon icon="sign-out-alt"/> Logout </Link>

                </header>
                <div className="conteudo">
                    <div className="box">
                        <h1><FontAwesomeIcon icon="external-link-square-alt"/> Cadastre seu usuário</h1>
                        <p>Prencha as informações do seu usuário.</p>
                         <form onSubmit={handlerUser}>
                            <div className="input-grupo">
                                <input type="text" 
                                    className="nomeUsuario" 
                                    placeholder="Digite seu usuário"
                                    value={username} 
                                    onChange={e => setUsername(e.target.value)}/>
                                <input type="password" 
                                    value={senha} 
                                    className="senha" 
                                    placeholder="Digite sua senha" 
                                    onChange={e => setSenha(e.target.value)}/>                               
                            </div>
                                <div className="radiobuttonAdmin">
                                    <input type="radio" 
                                        className="radiobutton" 
                                        checked 
                                        value={isAdmin} 
                                        onChange={e => setIsAdmin(e.target.value)}/>
                                    <span className="isAdmin">É Admin?</span>
                                </div>
                            <button type="submit" onClick={handlerUser} className="btn">Cadastrar</button>
                        </form>                         
                    </div>      
                </div>
            </main>
        </div>
    );

}