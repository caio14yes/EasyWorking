import React from 'react';
import Button from '../Button/index';

class ListarCurriculo extends React.Component{   
    constructor(props){
        super(props);
        this.state = {
            nomeCurriculum: "",
            idadeCurriculum: "",
            cidadeCurriculum: "",
            telefoneCurriculum: "",
            emailCurriculum: "",
            objetivosCurriculum: ""
        }
    };

    listar = (e) => {
        console.log("oi");
        let storange = window.localStorage;
        let listacandidatos = JSON.parse(storange.getItem("candidatos")) || [];

        this.setState({
            nomeCurriculum : listacandidatos.nome,
            idadeCurriculum : listacandidatos.idade,
            cidadeCurriculum : listacandidatos.cidade,
            telefoneCurriculum : listacandidatos.telefone,
            emailCurriculum : listacandidatos.email,
            objetivosCurriculum : listacandidatos.objetivos,
        });

        // console.log(this.state.nomeCurriculum)
        // console.log(this.state.idadeCurriculum)
        // console.log(this.state.cidadeCurriculum)
        // console.log(this.state.telefoneCurriculum)
        // console.log(this.state.emailCurriculum)
        // console.log(this.state.objetivosCurriculum)
    }; 
  
    render() {
        return (
            <div>
                <Button className="pure-button pure-button-primary" text="listar" onClick={this.listar}/>
                <h1> Curriculum Vitae</h1>
                <p>Nome: {this.state.nomeCurriculum} </p>
                <p>Idade: {this.state.idadeCurriculum} </p>
                <p>Cidade: {this.state.cidadeCurriculum} </p>
                <p>Telefone: {this.state.telefoneCurriculum} </p>
                <p>E-mail: {this.state.emailCurriculum} </p>
                <p>Objetivos: {this.state.objetivosCurriculum} </p>
            </div>
        );
    }
}

export default ListarCurriculo;