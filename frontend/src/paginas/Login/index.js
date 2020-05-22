import React, {useState} from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../imagens/logo-preto.png';
import Cookies from 'universal-cookie';

import api from '../../services/api';

const cookies = new Cookies();

export default function Login(){


    const [login, setLogin_usuario] = useState('');
    const [senha, setSenha_usuario] = useState('');
    const history = useHistory('');
  
    async  function handleLogin (e){
      e.preventDefault();

      try {
        const response = await api.post('login', { login, senha });
        
        //console.log(response.data.accessToken);
        
        cookies.set('token', response.data.accessToken, { path: '/' });
        console.log(cookies.get('token')); 

        history.push('/dashboard');
        
      }
      catch (err){
        alert('Usuário e/ou senha incorretos, tente novamente.'); 
      }
    }


    return (
        <div className="login">
        <div className="login-form">
            <div className="formulario">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                      <label for="email">Login</label>
                      <input type="text"
                        className="email" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Digite seu Login"
                        value={login}
                        onChange={e => setLogin_usuario(e.target.value)}/>
                    
                    </div>
                    <div className="form-group">
                      <label for="senha">Senha</label>
                      <input type="password"
                        className="senha" 
                        id="senha" 
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha_usuario(e.target.value)}/>
                    </div>
                    
                    <button type="submit" className="btn"  > Login</button>
                    {/* <Link to="/dashboard"> Passar para Dashboard (link de teste) </Link> */}
                    <Link to="/cadastrarusuario"> Não possui cadastro? Clique aqui.</Link>
                  </form>
            </div>
        </div>
        <div className="banner-login">
            <img src={logoImg} alt="Balada Pub"/>
            <h4>Bem vindo ao seu Dashboard</h4>
            
        </div>
    </div>

    );
}