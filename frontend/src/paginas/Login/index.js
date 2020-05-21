import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../imagens/logo-preto.png';

import api from '../../services/api';

export default function Login(){
    const [login_usuario, setLogin_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');
  
    async  function handleLogin (e){
      e.preventDefault();

      try {
        const response = await api.post('login', { login_usuario, senha_usuario });

        console.log(response.data.login_usuario);

      }
      catch (err){
        alert( 'Falhouu'); 
      }
    }


    return (
        <div className="login">
        <div className="login-form">
            <div className="formulario">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input type="text"
                        className="email" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Digite seu E-mail"
                        value={login_usuario}
                        onChange={e => setLogin_usuario(e.target.value)}/>
                    
                    </div>
                    <div className="form-group">
                      <label for="senha">Senha</label>
                      <input type="password"
                        className="senha" 
                        id="senha" 
                        placeholder="Senha"
                        value={senha_usuario}
                        onChange={e => setSenha_usuario(e.target.value)}/>
                    </div>
                    
                    <button type="submit" className="btn"  > Login</button>
                    <Link to="/dashboard"> Passar para Dashboard (link de teste) </Link>
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