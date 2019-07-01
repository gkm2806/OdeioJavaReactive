import React, {Component} from "react"
import axios from 'axios'

export default class Register extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const {nome, senha} = e.target
        axios.post(`http://localhost:8080/usuarios/add?nome=${nome.value}&senha=${senha.value}`).then((res)=>{
            res.data == true ? this.props.login(nome.value) : alert("Falha ao realizar o cadastro")
             
        })

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3> Registre sua conta </h3>
                <input name="nome" type="text" placeholder="nome" /> <br />
                <input name="senha" type="password" placeholder="senha" /> <br />
                <input type="submit" value="cadastrar" />
            </form>
        )
    }
}