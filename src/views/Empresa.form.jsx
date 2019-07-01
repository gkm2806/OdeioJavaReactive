import React, {Component} from "react";
import axios from "axios"

export default class EmpresaForm extends Component {
    handleSubmit = (e) => {
        const {nome, slogan} = e.target
       
        axios.post(`http://localhost:8080/empresas/add?nome=${nome.value}&slogan=${slogan.value}`)
        .then(()=>{
            console.log("enviado")
        })
        .catch((e) => {
            console.log(e)
        })
  
        

        nome.value = ""
        slogan.value = ""

        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3> Criar empresa </h3>
                <input name="nome" type="text" placeholder="nome" /> <br />
                <input name="slogan" type="text" placeholder="slogan" /> <br />
                <input type="submit" value="enviar" />
            </form>
        )
    }
}