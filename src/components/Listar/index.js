import React from 'react';
import FormCadastroCurriculo from '../Form/CadastroCurriculo/index';
import Button from '../Button/index';

class ListarCurriculo extends FormCadastroCurriculo{   
    constructor(props){
        super(props);
        this.state = {
            curriculum: {
                nomeCurriculum: "",
                idadeCurriculum: "",
                cidadeCurriculum: "",
                telefoneCurriculum: "",
                emailCurriculum: "",
                objetivosCurriculum: ""
            },
            arrayCurriculum: []
        }
    };

    listar() {
        console.log("oi");
        let storange = window.localStorage;
        let listacandidatos = JSON.parse(storange.getItem("candidatos")) || [];

        this.setState(
            {nomeCurriculum: listacandidatos[0].nome}
        )

        console.log(this.nomeCurriculum)
    }; 
  
    render() {
        return (
            <div>
                <Button className="pure-button pure-button-primary" text="listar" onClick={this.listar}/>
            </div>
        );
    }
}

export default ListarCurriculo;