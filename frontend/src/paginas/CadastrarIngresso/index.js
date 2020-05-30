import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css';
library.add(fas);

export default function Dashboard(){
    const [selectDateIn, setSelectDateIn] = useState(new Date());
    const [selectDateOut, setSelectDateOut] = useState(new Date());
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
                    <div className="box">
                        <h1><FontAwesomeIcon icon="external-link-square-alt"/> Cadastrando seu Ingresso</h1>
                        <p>Prencha as informações do seu ingresso.</p>
                         <form>
                            <div className="input-grupo">
                                <input type="text" placeholder="Nome do Ingresso" className="nomeIngresso" />
                                <input type="text" placeholder="Quantidade" className="qtd"/>
                                <input type="text" placeholder="Preço R$" className="preco"/>
                            </div>
                                <input type="text" placeholder="Setor do Ingresso" className="setorIngresso"/>
                                
                                <div className="box-calendario">
                                        <div className="calendario-inicio">
                                            <p>Inicio das Vendas:</p>
                                            <DatePicker
                                            selected={selectDateIn}
                                            onChange={date => setSelectDateIn(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"
                                            dateFormat="d MMMM, yyyy h:mm aa"
                                            />
                                        </div>
                                        <div className="calendario-fim">
                                            <p>Fim das Vendas:</p>
                                            <DatePicker 
                                            selected={selectDateOut}
                                            onChange={date => setSelectDateOut(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"
                                            dateFormat="d MMMM, yyyy h:mm aa"
                                            />
                                        </div>   
                                </div>
                                <button type="submit" className="btn">Cadastrar Ingresso</button>
                        </form>
                         
                    </div>      
                </div>
            </main>
        </div>




    );

}