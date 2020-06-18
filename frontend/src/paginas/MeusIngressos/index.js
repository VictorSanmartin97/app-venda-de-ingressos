import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import api from '../../services/api';
import './styles.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
library.add(fas);

export default function MeusIngressos() {
    const user = localStorage.getItem('username');
    const [ingressos, setIngressos] = useState([]);
    const [eventos, setEventos] = useState([]);

    const today = new Date();

    useEffect(() => {
        api.get('ingressos', {
            headers: {
                Authorization: user,
            }
        }).then(response => {
            setIngressos(response.data);
        })
    }, []);
    useEffect(() => {
        api.get('eventos', {
            headers: {
                Authorization: user,
            }
        }).then(response => {
            setEventos(response.data);
        })
    }, []);

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
                    <Link to="/dashboard"> <FontAwesomeIcon icon="cog"/> Dashboard </Link>
                    <Link to="/" onClick ={()=>console.log(cookies.remove('token',{ path :'/' }))}> <FontAwesomeIcon icon="sign-out-alt"/> Logout </Link>

                </header>
                <div class="conteudo">
                    <div className="box-meus-ingressos">
                        <h1><FontAwesomeIcon icon="user" /> Meus Ingressos </h1>
                        <br></br>
                        {eventos.map(evento => (
                            <div>
                                < h2 > Evento: {evento.nome_evento}	- {reverseDate(evento.hora_inicio.substring(0, 10))} </h2>

                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Setor</th>
                                            <th scope="col">Valor</th>
                                            <th scope="col">Quantidade</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ingressos.map(ingresso => function () {
                                            if(ingresso.id_evento == evento.id_evento){
                                                return(<tr>
                                                    <td>{ingresso.nome_ingresso}</td>
                                                    <td>{ingresso.setor_ingresso}</td>
                                                    <td>R$ {ingresso.valor_ingresso}</td>
                                                    <td>{ingresso.quantidade}</td>
                                                    <td><FontAwesomeIcon icon="trash-alt" /></td>
                                                    <td><FontAwesomeIcon icon="user-edit" /></td>
                                                </tr>);
                                            }
                                        }())}
                                    </tbody>
                                </table> 
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div >
    );

}
function reverseDate(date) {
    var data = date.split("-");
    var inverseDate = data.reverse();
    var dataFinal = inverseDate.join("/");

    return dataFinal;
}

