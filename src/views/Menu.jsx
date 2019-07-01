import React, { Component } from "react"
import {Link} from "react-router-dom"

export default class Menu extends Component {
    render(){
        return(
            <div>
                <Link to="/empresas/add" > <button> +empresa </button> </Link>
                <Link to="/empregados/add" > <button> +empregado </button> </Link>
                <Link to="/projetos/add" > <button> +projeto </button> </Link>
                <Link to="/teams/add" > <button> +team </button> </Link>
                
                <Link to="/empresas"> <button> empresas </button> </Link>
                <Link to="/empregados"> <button> empregados </button> </Link>
                <Link to="/teams"> <button> teams </button> </Link>
                <Link to="/projetos"> <button> projetos </button> </Link>
            </div>
        )
    }
}
