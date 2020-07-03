import React, { useState, useEffect}from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import './styles.css';
import api from '../../services/api';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
library.add(fas);

export default function Dashboard(){
    
    const user = localStorage.getItem('username');

    const [ingressos, setIngressos] = useState([]);
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        api.get('eventos', {
            headers: {
                Authorization: user,
            }
        }).then(response => {
            setEventos(response.data);
        })
    }, []);

    useEffect(() => {
        api.get('ingressos', {
            headers: {
                Authorization: user,
            }
        }).then(response => {
            setIngressos(response.data);
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
                    <Link to="/" onClick ={()=>console.log(cookies.remove('token',{ path :'/' }))}> <FontAwesomeIcon icon="sign-out-alt"/> Logout </Link>

                </header>
                <div className="conteudo">
                    <div className="central">
                        <div className="box-prox-evento">
                            <h1><FontAwesomeIcon icon="calendar-alt"/> Próximos Eventos</h1>
                            <br></br>                            
                            <p>Abaixo número de ingressos disponíveis para a venda.</p>
                            {eventos.map(evento => (
                            
                            <div>
                                <h2> Evento: {evento.nome_evento} - {reverseDate(evento.hora_inicio.substring(0, 10))} </h2>
                                {ingressos.map(ingresso => function () {
                                    if(ingresso.id_evento == evento.id_evento){
                                    return(<ul className="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        {ingresso.nome_ingresso}
                                        <span className="badge badge-primary badge-pill">{ingresso.quantidade}</span>
                                    </li>                                    
                                </ul>);
                                    }
                                }())}
                            </div>
                            ))}   
                                

                        </div>
                        <div className="box-ingressos">
                            <h1><FontAwesomeIcon icon="external-link-square-alt"/> Seus ingressos mais vendidos.</h1>
                            <br></br>
                            {eventos.map(evento => (
                            
                            <div>
                                <h2 className=""> Evento: {evento.nome_evento} - {reverseDate(evento.hora_inicio.substring(0, 10))} </h2>
                                {ingressos.map(ingresso => function () {
                                    if(ingresso.id_evento == evento.id_evento){
                                    return(<ul className="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        {ingresso.nome_ingresso}
                                        <span className="badge badge-primary badge-pill">{(ingresso.quantidade%3)*2}</span>
                                    </li>                                    
                                </ul>);
                                    }
                                }())}
                            </div>
                            ))} 
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

}

function reverseDate(date) {
    var data = date.split("-");
    var inverseDate = data.reverse();
    var dataFinal = inverseDate.join("/");

    return dataFinal;
}