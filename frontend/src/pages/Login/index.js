import React from 'react'; 
import './styles.css'; 

export default function Login (){
    return(
        <div className="login">
        <div className="login-form">
            <div className="form">
                <form action="/paginas/dashboard.html">
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu E-mail"/>

                    </div>
                    <div className="form-group">
                      <label for="senha">Senha</label>
                      <input type="password" className="form-control" id="senha" placeholder="Senha"/>
                    </div>

                    <button type="submit" className="btn"  > Login</button>
                  </form>

            </div>
        </div>
        <div className="banner-login">
            <img src="imagens/logo-preto.png"/>
            <h4>Bem vindo ao seu Dashboard</h4>

        </div>
    </div>
    );
} 