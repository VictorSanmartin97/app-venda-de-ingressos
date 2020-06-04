import React, { Component, useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import api from '../../services/api';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css';
library.add(fas);
    
registerLocale('pt-BR', pt);
export default function CadastraEvento (){    

    const [nome_evento, setNome_evento] = useState('');
    const [descricao_evento, setDescricao_evento] = useState('');
    const [tipo_evento, setTipo_evento] = useState('');   
    const [hora_inicio, setHora_inicio] = useState(new Date());

    const history = useHistory('');

    async function handlerCreateEvent (e){
        e.preventDefault();

        const data = {
            nome_evento,
            descricao_evento,
            tipo_evento,
            hora_inicio,
        };

        try{
            await api.post('evento', data);

            alert("Evento cadastrado com sucesso!");

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
                <div class="conteudo">
                    <div className="box-evento">
                        <form onSubmit={handlerCreateEvent}>
                            <div className="cadastro">
                                <div className="box-cadastro">
                                <h1><FontAwesomeIcon icon="external-link-square-alt"/> Cadastrando seu Evento</h1>
                                <p>Prencha as informações do seu ingresso.</p>
                                        <input type="text" placeholder="Nome do Evento"
                                            className="nomeEvento"
                                            value={nome_evento}
                                            onChange={e => setNome_evento(e.target.value)}
                                            />
                                        <textarea rows="5" placeholder="Descrição do Evento" 
                                            className="descEvento"
                                            value={descricao_evento}
                                            onChange={e => setDescricao_evento(e.target.value)}
                                        />
                                        <select value={tipo_evento} onChange={e => setTipo_evento(e.target.value)}>
                                            <option value=""> Selecione o tipo do evento </option>
                                            <option value="Show"> Show </option>
                                            <option value="Aniversário"> Aniversário </option>                                     
                                        </select>
                                        <div className="box-calendario">
                                            <div className="calendario-inicio">
                                                <p>Data do Evento</p>
                                                <DatePicker
                                                selected={hora_inicio}
                                                locale={pt}
                                                onChange={date => setHora_inicio(date)}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="dd-MM-yyyy hh:mm:ss a"
                                                />
                                            </div>
                                        </div>
                                </div>
                                <div className="box-img">                                
                                <div className="previewText image-container"></div>                             
                                    
                                </div>
                            </div>
                            <button type="submit" className="btn">Cadastrar Evento</button> 
                        </form>       
                    </div>  
                    
                </div>
            </main>
        </div>
    );
}
