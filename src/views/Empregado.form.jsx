import React, {Component} from "react";
import axios from "axios"

export default class EmpregadoForm extends Component {
    handleSubmit = (e) => {
        const {nome, cargo, empresa, salario, idade} = e.target

        let empresaArray = []
        for(var i = 0; i < this.props.empresas.length; i++) empresaArray[i] = this.props.empresas[i].nome

        if(!empresaArray.includes(empresa.value))alert("Empresa não existe!")

        axios.post(`http://localhost:8080/empregados/add?nome=${nome.value}&cargo=${cargo.value}&empresa=${empresa.value}&salario=${salario.value}&idade=${idade.value}`)
        .then(()=>{
            console.log("enviado")
        })
        .catch((e) => {
            console.log(e)
        })

        nome.value = ""
        cargo.value = ""
        empresa.value = ""
        salario.value = null
        idade.value = null
        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3> Cadastrar Empregado </h3>
                <input name="nome" type="text" placeholder="nome" /> <br />
                <input name="idade" type="number" placeholder="idade" /> <br />
                <input name="cargo" type="text" placeholder="cargo" /> <br />
                <input name="empresa" type="text" placeholder="empresa" /> <br />
                <input name="salario" type="number" placeholder="salario" /> <br />


                <input type="submit" value="enviar" />
            </form>
        )
    }
}