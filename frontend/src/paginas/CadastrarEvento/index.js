import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../imagens/logo-branco.png';
import './styles.css';
library.add(fas);
    

class CadastraEvento extends Component {
    state =  {
      selectedFile: null,
      imagePreviewUrl: null
    };
   
    fileChangedHandler = event => {
      this.setState({
        selectedFile: event.target.files[0]
      })
   
      let reader = new FileReader();
       
      reader.onloadend = () => {
        this.setState({
          imagePreviewUrl: reader.result
        });
      }
   
      reader.readAsDataURL(event.target.files[0])
   
    }
   /*PODE SER USADO PARA O BACK-END*/
   /* submit = () => {
 
        var fd = new FormData();
     
        fd.append('file', this.state.selectedFile);
     
        var request = new XMLHttpRequest();
     
        request.onreadystatechange = function() {
          if (this.readyState === 4 &amp;&amp; this.status === 200) {
            alert('Uploaded!');
          }
        };
        request.open("POST", "https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload", true);
        request.send(fd);
      }*/


/*export default function Dashboard()*/ render () {
    let $imagePreview = (<div className="previewText image-container">A imagem selecionada aparecerá aqui.</div>);
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="400" /> </div>);
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
                        <form>
                            <div className="cadastro">
                                <div className="box-cadastro">
                                <h1><FontAwesomeIcon icon="external-link-square-alt"/> Cadastrando seu Evento</h1>
                                <p>Prencha as informações do seu ingresso.</p>
                                        <input type="text" placeholder="Nome do Evento" className="nomeEvento"/>
                                        <textarea rows="5" placeholder="Descrição do Evento" className="descEvento"/>
                                        <select>
                                            <option value="18Anos"> Maiores de 18 Anos </option>
                                            <option value="16Anos"> Maiores de 16 Anos </option>                                     
                                        </select>
                                        <input type="text" placeholder="Hora de Inicio" className="hrInicioEvento"/>
                                </div>
                                <div className="box-img">
                                
                                    { $imagePreview }
                                    <input type="file" name="avatar" onChange={this.fileChangedHandler} />
                                    {/* <button type="button" onClick={this.submit} > Upload </button>*/}
                                    <br/>
                                    <br/>
                                    <p>OBS: pensar numa forma de como controlar o ingresso por evento</p>
                                </div>
                            </div>
                            <button type="submit" className="btn">Cadastrar Evento</button> 
                        </form>       
                    </div>  
                     
                </div>
            </main>
        </div>




    );

}}
export default CadastraEvento;