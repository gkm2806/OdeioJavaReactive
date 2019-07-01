import React, {Component} from "react";
import axios from "axios"

export default class TeamForm extends Component {
    handleSubmit = (e) => {
        const {nome, empresa} = e.target
        let empresaArray = []
        for(var i = 0; i < this.props.empresas.length; i++) empresaArray[i] = this.props.empresas[i].nome

        if(!empresaArray.includes(empresa.value))alert("Empresa não existe!")

        axios.post(`http://localhost:8080/teams/add?nome=${nome.value}&empresa=${empresa.value}`)
        .then(()=>{
            console.log("enviado")
            this.props.gets()
        })
        .catch((e) => {
            console.log(e)
        })
  
        

        nome.value = ""
        empresa.value = ""

        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3> começar novo time </h3>
                <input name="nome" type="text" placeholder="nome" /> <br />
                <input name="empresa" type="text" placeholder="empresa" /> <br />
                <input type="submit" value="enviar" />
            </form>
        )
    }
}