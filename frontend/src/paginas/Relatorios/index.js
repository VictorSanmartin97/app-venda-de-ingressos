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
                <div class="conteudo">
                    <div className="box-eventos">
                    
                    <h1><FontAwesomeIcon icon="flag-checkered"/> Relatórios</h1>
                    <p>Escolha abaixo o evento desejado para obter informações sobre suas vendas.</p>
                    
                    <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>Balada Havaiana</option>
                        <option>Outros Evento</option>
                        <option>Outros Evento</option>
                        <option>Outros Evento</option>
                        <option>Outros Evento</option>
                        </select>
                    </div>
                    <h1> Você Selecionou o Evento:  Balada Havaiana</h1>
                    <br></br>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome do Ingresso</th>
                            <th scope="col">Colocados à Venda</th>
                            <th scope="col">Vendidos</th>
                            <th scope="col">Valor Unitário R$</th>
                            <th scope="col">Total  R$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Universitário</td>
                            <td>100</td>
                            <td>98</td>
                            <td>R$ 15,00</td>
                            <td>R$ 1.470,00</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Pista 1º Lote</td>
                            <td>150</td>
                            <td>127</td>
                            <td>R$ 20,00</td>
                            <td>R$ 2.540,00</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Pista 2º Lote</td>
                            <td>150</td>
                            <td>35</td>
                            <td>R$ 25,00</td>
                            <td>R$ 875,00</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Camarote </td>
                            <td>50</td>
                            <td>47</td>
                            <td>R$ 40,00 </td>
                            <td>R$ 1.880,00</td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <h1>Suas vendas tiveram um total de R$ 6.765,00</h1>
                    </div>
                </div>
            </main>
        </div>


    );

}