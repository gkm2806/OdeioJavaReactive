import React, {Component} from "react"
import axios from 'axios'
import {Link} from "react-router-dom"

export default class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const {nome, senha} = e.target
        axios.post(`http://localhost:8080/usuarios/login?nome=${nome.value}&senha=${senha.value}`).then((res)=>{
            res.data == true ? this.props.login(nome.value) : alert("Falha ao realizar login")
        })

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3> Faça login para entrar </h3>
                <input name="nome" type="text" placeholder="nome" /> <br />
                <input name="senha" type="password" placeholder="senha" /> <br />
                <input type="submit" value="login" />
                <Link to="/register"><button> singup </button></Link>
            </form>
        )
    }
}