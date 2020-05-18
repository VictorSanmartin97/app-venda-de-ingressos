import React, {useState} from 'react'  ;
import { Link, useHistory } from 'react-router-dom';
import './styles.css'

import api from '../../services/api'

export default function Login (){
   const [login_usuario, setLogin_usuario] = useState('');
   const history = useHistory();

   async function handleSubmit(e){
     e.preventDefault();
     
     try{
        const response = await api.post('login', {login_usuario});

        localStorage.setItem('login_usuario');

        history.push('/main');

        console.log(response.data.login_usuario);

     }
     catch (err) {
        alert('Falha ao autenticar, tente novamente.');
     }
          
     console.log(login_usuario);
   }
  
  return(
        <div className="login">
        <div className="login-form">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input type="text" className="form-control" 
                        id="email" aria-describedby="emailHelp" 
                        placeholder="Digite seu Username"
                        value={login_usuario}
                        onChange={e => setLogin_usuario(e.target.value)}/>

                    </div>
                    <div className="form-group">
                      <label for="senha">Senha</label>
                      <input type="password" className="form-control" id="senha" placeholder="Senha"
                      />
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