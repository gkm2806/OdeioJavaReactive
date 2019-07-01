import React, {Component} from "react";
import axios from "axios"

export default class ProjForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        const {nome, empresa, team} = e.target
        let empresaArray = [], teamArray = []
        for(var i = 0; i < this.props.empresas.length; i++) empresaArray[i] = this.props.empresas[i].nome
        for(var i = 0; i < this.props.teams.length; i++) teamArray[i] = this.props.teams[i].nome

        if(!empresaArray.includes(empresa.value))alert("Empresa não existe!")
        if(!teamArray.includes(team.value))alert("Time (ainda) não existe!")
        axios.post(`http://localhost:8080/projetos/add?nome=${nome.value}&empresa=${empresa.value}&team=${team.value}&estagio=inicial`)
        .then(()=>{
            console.log("enviado")
        })
        .catch((e) => {
            console.log(e)
        })
  
        

        nome.value = ""
        empresa.value = ""
        team.value = ""

        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3> Iniciar novo Projeto </h3>
                <input name="nome" type="text" placeholder="nome" /> <br />
                <input name="empresa" type="text" placeholder="empresa" /> <br />
                <input name="team" type="text" placeholder="time" /> <br />
                <input type="submit" value="enviar" />
            </form>
        )
    }
}