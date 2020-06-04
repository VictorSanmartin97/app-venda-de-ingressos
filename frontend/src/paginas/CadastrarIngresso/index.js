import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';
import logoImg from '../../imagens/logo-branco.png';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css';
library.add(fas);

registerLocale('pt-BR', pt);
export default function Dashboard(){
    
    const [quantidade, setQuantidade] = useState('');
    const [nome_ingresso, setNome_ingresso] = useState('');
    const [valor_ingresso, setValor_ingresso] = useState('');
    const [setor_ingresso, setSetor_ingresso] = useState('');   
    const [data_iniciovendas, setData_iniciovendas] = useState(new Date());
    const [data_fimvendas, setData_fimvendas] = useState(new Date());
    

    const history = useHistory('');
    
    async function handlerCreateTicket(e){
        e.preventDefault();

        const data = {
            nome_ingresso,
            valor_ingresso,
            setor_ingresso,
            quantidade,
            data_iniciovendas,
            data_fimvendas,
        };

        try{
            await api.post('ingresso', data);

            alert("Ingresso cadastrado com sucesso!");

            history.push('/dashboard');
        } catch (err){
            alert("Não deu certo, tente novamente");
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
                         <form onSubmit={handlerCreateTicket}>
                            <div className="input-grupo">
                                <input type="text" 
                                    placeholder="Nome do Ingresso" 
                                    className="nomeIngresso"
                                    value={nome_ingresso}
                                    onChange={e => setNome_ingresso(e.target.value)} />
                                <input type="text" 
                                    placeholder="Quantidade" 
                                    className="qtd"
                                    value={quantidade}
                                    onChange={e => setQuantidade(e.target.value)} />
                                <input type="text" 
                                    placeholder="Preço R$" 
                                    className="preco"
                                    value={valor_ingresso}
                                    onChange={e => setValor_ingresso(e.target.value)} />
                            </div>
                                <input type="text" 
                                    placeholder="Setor do Ingresso" 
                                    className="setorIngresso"
                                    value={setor_ingresso}
                                    onChange={e => setSetor_ingresso(e.target.value)} />
                                
                                <div className="box-calendario">
                                        <div className="calendario-inicio">
                                            <p>Inicio das Vendas:</p>
                                            <DatePicker
                                            selected={data_iniciovendas}
                                            locale={pt}
                                            onChange={date => setData_iniciovendas(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"
                                            dateFormat="dd-MM-yyyy hh:mm:ss a"
                                            />
                                        </div>
                                        <div className="calendario-fim">
                                            <p>Fim das Vendas:</p>
                                            <DatePicker 
                                            selected={data_fimvendas}
                                            locale={pt}
                                            onChange={date => setData_fimvendas(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"
                                            dateFormat="dd-MM-yyyy hh:mm:ss a"
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