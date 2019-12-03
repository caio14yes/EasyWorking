import React from 'react';
import Button from '../Button/index';

class ListarCurriculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeCurriculum: "",
            idadeCurriculum: "",
            cidadeCurriculum: "",
            telefoneCurriculum: "",
            emailCurriculum: "",
            objetivosCurriculum: "",
            formacadCurriculum: "",
            exprofCurriculum: ""
        }
    };

    listar = (e) => {
        console.log("oi");
        let storange = window.localStorage;
        let listacandidatos = JSON.parse(storange.getItem("candidatos")) || [];

        this.setState({
            nomeCurriculum: listacandidatos[0].nome,
            idadeCurriculum: listacandidatos[0].idade,
            cidadeCurriculum: listacandidatos[0].cidade,
            telefoneCurriculum: listacandidatos[0].telefone,
            emailCurriculum: listacandidatos[0].email,
            objetivosCurriculum: listacandidatos[0].objetivos,
            formacadCurriculum: listacandidatos[0].formacad,
            exprofCurriculum: listacandidatos[0].exprof,
        });

        // console.log(this.state.nomeCurriculum)
        // console.log(this.state.idadeCurriculum)
        // console.log(this.state.cidadeCurriculum)
        // console.log(this.state.telefoneCurriculum)
        // console.log(this.state.emailCurriculum)
        // console.log(this.state.objetivosCurriculum)
    };

    render() {
        const style = {
            margin: '20px',
            padding: '10px',
            width: '50%',
            border: '1px solid #333',
            fontSize: '17px',
        }

        return (
            <div style={style}>
                <Button className="pure-button pure-button-success" text="listar" onClick={this.listar} />
                <h1> Curriculum Vitae</h1>
                <p>Nome: {this.state.nomeCurriculum} </p>
                <p>Idade: {this.state.idadeCurriculum} </p>
                <p>Cidade: {this.state.cidadeCurriculum} </p>
                <p>Telefone: {this.state.telefoneCurriculum} </p>
                <p>E-mail: {this.state.emailCurriculum} </p>
                <h4>Objetivos:</h4>
                <p>{this.state.objetivosCurriculum} </p>
                <h4>Formação Acadêmica:</h4>
                <p> {this.state.formacadCurriculum} </p>
                <h4>Experiências Profissionais:</h4>
                <p>{this.state.exprofCurriculum} </p>
            </div>
        );
    }
}

export default ListarCurriculo;