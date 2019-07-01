import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { Route, Switch } from "react-router-dom"

import Menu from "./views/Menu"
import Login from "./views/Login"
import Register from "./views/Register"
import EmpresaForm from './views/Empresa.form';
import EmpregadoForm from './views/Empregado.form';
import Viewer from "./views/Viewer"
import TeamForm from './views/Team.form';
import ProjForm from './views/Projeto.form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      empresas: [],
      empregados: [],
      teams: [],
      projetos: []
    }
  }
  gets = async () => {
    let empresas = await Axios.get('http://localhost:8080/empresas')
    let teams = await Axios.get('http://localhost:8080/teams')
    let empregados = await Axios.get('http://localhost:8080/empregados')
    let projetos = await Axios.get('http://localhost:8080/projetos')

    this.setState({
      empresas: empresas.data,
      teams: teams.data,
      empregados: empregados.data,
      projetos: projetos.data,
      user: null
    })
  }
  componentWillMount() {
    this.gets()
  }

  login = (user) => {
    this.setState({
      user: user
    })
  }

  render() {
    const { empresas, empregados, projetos, teams } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
          <img style={{ height: "15%", width: "15%" }} src={logo} className="App-logo" alt="logo" />
          <p>
            Olha como isso aqui é muito melhor que java, tem um logo girando ali em cima!
          </p>
          {!this.state.user ? (
            <Switch>
              <Route path='/register' render={() => <Register login={this.login} />} />
              <Route path='/' render={() => <Login login={this.login} />} />
            </Switch>
          ) :
            (
              <Switch>
                <Route exact path='/empresas/add' render={() => <EmpresaForm gets={this.gets} />} />
                <Route exact path='/empresas' render={() => <Viewer type="empresas" array={empresas} />} />

                <Route path='/empregados/add' render={() => <EmpregadoForm gets={this.gets} empresas={empresas} />} />
                <Route exact path='/empregados' render={() => <Viewer type="empregados" array={empregados} />} />

                <Route path='/projetos/add' render={() => <ProjForm gets={this.gets} teams={teams} empresas={empresas} teams={teams} />} />
                <Route exact path='/projetos' render={() => <Viewer type="projetos" array={projetos} />} />

                <Route path='/teams/add' render={() => <TeamForm gets={this.gets} empresas={empresas} />} />
                <Route exact path='/teams' render={() => <Viewer type="teams" array={teams} />} />
              </Switch>
            )}

        </header>
      </div>
    );
  }
}

export default App;
