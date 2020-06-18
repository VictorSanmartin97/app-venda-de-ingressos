import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';
import './styles.css';
library.add(fas);

export default function CadastroUsuario(){
    const [login_usuario, setLogin_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');
    const [is_admin, setIs_admin] = useState('');   
    const data_cadastro = new Date();

    const history = useHistory('');
   
    async function handlerCreateUser(e){
        e.preventDefault();

        const data = {           
            login_usuario,
            senha_usuario,
            data_cadastro,
            is_admin,
        };

        try{
            await api.post('usuario', data);

            alert(`Seu cadastro foi realizado com sucesso`);

            history.push('/');
        } catch(err){
            alert('Não deu certo, tente novamente');
        }

    }

    return (
        <div className="dashboard">
            <main className="main-cadastro-user">
                <header>
                    <Link to="/"> <FontAwesomeIcon icon="sign-in-alt"/> Login </Link>
                </header>
                <div className="conteudo">
                    <div className="box">
                        <h1><FontAwesomeIcon icon="external-link-square-alt"/> Cadastre seu usuário</h1>
                        <p>Prencha as informações do seu usuário.</p>
                         <form onSubmit={handlerCreateUser}>
                            <div className="input-grupo">
                                <input type="text" 
                                    className="nomeUsuario" 
                                    placeholder="Digite seu usuário"
                                    value={login_usuario} 
                                    onChange={e => setLogin_usuario(e.target.value)}/>
                                <input type="password" 
                                    className="senha" 
                                    placeholder="Digite sua senha" 
                                    value={senha_usuario} 
                                    onChange={e => setSenha_usuario(e.target.value)}/>                               
                            </div>
                                <div className="radiobuttonAdmin">
                                    <input type="radio" 
                                        className="radiobutton"                                        
                                        value={is_admin} 
                                        onChange={e => setIs_admin(e.target.value)}/>
                                    <span className="isAdmin">É Admin?</span>
                                </div>
                            <button type="submit" className="btn">Cadastrar</button>
                        </form>                         
                    </div>      
                </div>
            </main>
        </div>
    );

}