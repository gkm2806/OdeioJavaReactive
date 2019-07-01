import React, { Component } from "react"
import axios from "axios"

export default class Viewer extends Component {
    Card = (obj) => (
        <div key={obj.id} style={styles.card}>
            <button style={styles.delbtn} onClick={() => this.delete(obj.id)}>X</button>
            {Object.keys(obj).map(e => {
                if (e != "id") return <p key={e} >{e}: {obj[e]}</p>
            })}
        </div>
    )
    delete = (id) => {
        console.log(`Deletando ${id}`)
        axios.delete(`http://localhost:8080/${this.props.type}/delete?id=${id}`)
    }
    render() {
        const { array, type } = this.props
        return (
            <div>
                <h3> {type} </h3>


                <div style={{ display: "flex" }}>
                    {array.map(obj => (
                        this.Card(obj)
                    ))}
                </div>
            </div>
        )
    }
}

const styles = {
    delbtn: {
        float: "right",
        postion: "absolute",
        top: 0
    },
    card: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
        padding: "1em",
        width: "10em",
        backgroundColor: "#eef",
        color: "#111",
        textAlign: "left"
    }
}