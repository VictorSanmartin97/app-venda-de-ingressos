import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../imagens/logo-preto.png';



export default function Login(){
    return (
        <div className="login">
        <div className="login-form">
            <div className="formulario">
                <form>
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input type="email" className="email" id="email" aria-describedby="emailHelp" placeholder="Digite seu E-mail"/>
                    
                    </div>
                    <div className="form-group">
                      <label for="senha">Senha</label>
                      <input type="password" className="senha" id="senha" placeholder="Senha"/>
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