import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import api from '../../services/api';
import './styles.css';
library.add(fas);

export default function MeusEventos(){
    const user = localStorage.getItem('username');
    const [eventos, setEventos] = useState([]);

    const today = new Date();
    
    useEffect(() => {
        api.get('eventos', {
            headers: {
                Authorization: user,
            }
        }).then(response => {
             setEventos(response.data);
        })
    }, [ ]);
    
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
                    {/* <div className="box-eventos">
                    
                    <h1><FontAwesomeIcon icon="calendar-alt"/> Próximos Eventos</h1>
                    
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome do Evento</th>
                            <th scope="col">Data do Evento</th>
                            <th scope="col">Hora de Inicio</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Balada Havaiana</td>
                            <td>05/06/2020</td>
                            <td>23:59h</td>
                            <td><FontAwesomeIcon icon="trash-alt"/></td>
                            <td><FontAwesomeIcon icon="user-edit"/></td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>
                    <br></br><br></br> */}
                    <div className="box-eventos-passados">
                    
                    <h1><FontAwesomeIcon icon="calendar-alt"/> Todos os Eventos</h1>
                    
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nome do Evento</th>
                                <th scope="col">Data do Evento</th>
                                <th scope="col">Hora de Inicio</th>                                
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventos.map(evento => (                                
                                <tr>                                    
                                    <td>{evento.nome_evento}</td>
                                    <td>{reverseDate(evento.hora_inicio.substring(0,10))}</td>                                    
                                    <td>{evento.hora_inicio.substring(11,16)}</td>                                    
                                    <td><FontAwesomeIcon icon="trash-alt"/></td>
                                    <td><FontAwesomeIcon icon="user-edit"/></td>
                                </tr> 
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </main>
        </div>
    );

}

function reverseDate(date){
    var data = date.split("-");
    var inverseDate = data.reverse();
    var dataFinal = inverseDate.join("-");

    return dataFinal;
}