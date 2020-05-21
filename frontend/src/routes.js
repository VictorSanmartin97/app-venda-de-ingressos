import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './paginas/Login';
import Dashboard from './paginas/Dashboard';
import CadastrarUsuario from './paginas/CadastroUsuario';
import CadastrarEvento from './paginas/CadastrarEvento';
import CadastrarIngresso from './paginas/CadastrarIngresso';
import MeusEventos from './paginas/MeusEventos';
import MeusIngressos from './paginas/MeusIngressos';
import Relatorios from './paginas/Relatorios';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/cadastrarusuario" component={CadastrarUsuario} />
                <Route path="/cadastrarevento" component={CadastrarEvento} />
                <Route path="/cadastraringresso" component={CadastrarIngresso} />
                <Route path="/meuseventos" component={MeusEventos} />
                <Route path="/meusingressos" component={MeusIngressos} />
                <Route path="/relatorios" component={Relatorios} />


            </Switch>
        </BrowserRouter>
    )
}