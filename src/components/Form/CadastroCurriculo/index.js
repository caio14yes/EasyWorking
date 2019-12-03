import React from 'react';
import Label from '../../Label';
import Input from '../../Input';
import Button from '../../Button';
import Header from '../../Header';
import './../../../pure.css'
import Textarea from '../../Textarea';

class FormCadastroCurriculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidato: {
                nome: "",
                idade: "",
                cidade: "",
                telefone: "",
                email: "",
                objetivos: "",
                formacad: "",
                exprof: ""
            },
            validateErros: []
        }
    }
    //para usar apenas uma função ao invés de muitos para cada estado 
    handlerInputChange = (e) => {
        let candidato = this.state.candidato;
        candidato[e.target.id] = e.target.value;
        this.setState({
            candidato: candidato
        });
        // console.log(this.state.candidato);
    }

    validateNome(nome) {
        return nome.length !== 0 && nome.length <= 100;
    }
    validateIdade(idade) {
        return idade.length !== 0 && idade.length <= 100;
    }
    validateCidade(cidade) {
        return cidade.length !== 0 && cidade.length <= 100;
    }
    validateTelefone(telefone) {
        return telefone.length !== 0 && telefone.length <= 100;
    }
    validateEmail(email) {
        let re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        return re.test(email);
    }
    validateObjetivos(objetivos) {
        return objetivos.length !== 0 && objetivos.length <= 100;
    }
    validateFormacad(formacad) {
        return formacad.length !== 0 && formacad.length <= 100;
    }
    validateExprof(exprof) {
        return exprof.length !== 0 && exprof.length <= 100;
    }
    validate(candidatoState) {
        let erros = []
        if (!this.validateNome(candidatoState.nome)) {
            erros.push("Nome inválido")
        }
        if (!this.validateIdade(candidatoState.idade)) {
            erros.push("Dado inválido")
        }
        if (!this.validateCidade(candidatoState.cidade)) {
            erros.push("Cidade inválido, complete o campo corretamente!")
        }
        if (!this.validateTelefone(candidatoState.telefone)) {
            erros.push("Telefone inválido")
        }
        if (!this.validateEmail(candidatoState.email)) {
            erros.push("Email inválido")
        }
        if (!this.validateObjetivos(candidatoState.objetivos)) {
            erros.push("Dados inválidos")
        }
        if (!this.validateFormacad(candidatoState.formacad)) {
            erros.push("Dados inválidos")
        }
        if (!this.validateExprof(candidatoState.exprof)) {
            erros.push("Dados inválidos")
        }
        this.setState(
            { validateErros: erros }
        )
        return erros;
    }
    resetcandidatoState(candidatoState) {
        candidatoState.nome = "";
        candidatoState.idade = "";
        candidatoState.cidade = "";
        candidatoState.telefone = "";
        candidatoState.email = "";
        candidatoState.objetivos = "";
        candidatoState.formacad = "";
        candidatoState.exprof = "";
        this.setState(
            { candidato: candidatoState }
        )
    }
    handleSubmit = (event) => {
        event.preventDefault()

        let candidatoState = this.state.candidato;
        let erros = this.validate(candidatoState)

        if (erros.length === 0) {

            let storange = window.localStorage;

            // storange.setItem("candidatos",JSON.stringify(candidatoState));
            let listacandidatos = JSON.parse(storange.getItem("candidatos")) || [];
            listacandidatos.push(candidatoState);
            storange.setItem("candidatos", JSON.stringify(listacandidatos));
            console.log("Form submetido.");

            this.resetcandidatoState(candidatoState)
        }
    }


    render() {
        const style = {
            margin: '10px',
            padding: '10px',
            fontSize: '17px',
        }

        let erros = this.state.validateErros
        return (
            <div>
                <Header title="Cadastro de candidato" />
                <div style={style}>
                    {erros.map((erros, index) => (<p key={index}>{erros}</p>))}
                    <form className="pure-form pure-form-stacked pure-g" onSubmit={this.handleSubmit}>
                        <div className="pure-u-1-2 pure-u-md-1-3 ">
                            <Label text="Nome:" />
                            <Input id="nome" className="pure-u-23-24" type="text" placeholder="Digite o nome" onChange={this.handlerInputChange} value={this.state.candidato.nome} />
                        </div>
                        <div className="pure-u-1-2 pure-u-md-1-3">
                            <Label text="Idade:" />
                            <Input id="idade" className="pure-u-23-24" type="text" placeholder="Digite a idade" onChange={this.handlerInputChange} value={this.state.candidato.idade} />
                        </div>
                        <div className="pure-u-1-2 pure-u-md-1-3">
                            <Label text="Cidade:" />
                            <Input id="cidade" className="pure-u-23-24" type="text" placeholder="Digite o cidade" onChange={this.handlerInputChange} value={this.state.candidato.cidade} />
                        </div>
                        <div className="pure-u-1-2 pure-u-md-1-3">
                            <Label text="Telefone:" />
                            <Input id="telefone" className="pure-u-23-24" type="text" placeholder="Digite o telefone" onChange={this.handlerInputChange} value={this.state.candidato.telefone} />
                        </div>
                        <div className="pure-u-1-2 pure-u-md-1-3">
                            <Label text="E-mail:" />
                            <Input id="email" className="pure-u-23-24" type="text" placeholder="Digite o e-mail" onChange={this.handlerInputChange} value={this.state.candidato.email} />
                        </div>
                        <div className="pure-u-1-2 pure-u-md-1-3">
                            <Label text="Objetivos:" />
                            <Input id="objetivos" className="pure-u-23-24" type="text" placeholder="Digite o objetivo" onChange={this.handlerInputChange} value={this.state.candidato.objetivos} />
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <Label text="Formação acadêmica:" />
                            <Textarea id="formacad" className="pure-u-24-24" placeholder="Digite suas formações academicas" cols="25" rows="5" onChange={this.handlerInputChange} value={this.state.candidato.formacad} ></Textarea>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <Label text="Experiências profissionais:" />
                            <Textarea id="exprof" className="pure-u-24-24" placeholder="Digite suas experiências proficionais" cols="25" rows="5" onChange={this.handlerInputChange} value={this.state.candidato.exprof} ></Textarea>
                        </div>
                        <Button className="button-xlarge pure-button pure-button-success" text="Gravar" />
                    </form>
                </div>
            </div>
        );
    }
}

export default FormCadastroCurriculo;
