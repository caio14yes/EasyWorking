import React from 'react';
import Label from '../../Label';
import Input from '../../Input';
import Button from '../../Button';
import Header from '../../Header';
import Footer from '../../Footer';
import './../../../pure.css'

class FormCadastroCurriculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidato: {
                nome: "",
                idade:"",
                cidade:"",
                telefone:"",
                email: "",
                objetivos:""
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
        console.log(this.state.candidato);
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
        this.setState(
            { validateErros: erros }
        )
        return erros;
    }
    resetcandidatoState(candidatoState){
        candidatoState.nome = "";
        candidatoState.idade = "";
        candidatoState.cidade = "";
        candidatoState.telefone = "";
        candidatoState.email = "";
        candidatoState.objetivos = "";
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
        let erros = this.state.validateErros
        return (
            <div>
                {erros.map((erros, index) => (<p key={index}>{erros}</p>))}
                <Header title="Cadastro de candidato" />
                <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
                    <Label text="Nome:" />
                    <Input id="nome" type="text" placeholder="Digite o nome" onChange={this.handlerInputChange} value={this.state.candidato.nome} />
                    <Label text="Idade:" />
                    <Input id="idade" type="text" placeholder="Digite a idade" onChange={this.handlerInputChange} value={this.state.candidato.idade} />
                    <Label text="Cidade:" />
                    <Input id="cidade" type="text" placeholder="Digite o cidade" onChange={this.handlerInputChange} value={this.state.candidato.cidade} />
                    <Label text="Telefone:" />
                    <Input id="telefone" type="text" placeholder="Digite o telefone" onChange={this.handlerInputChange} value={this.state.candidato.telefone} />
                    <Label text="E-mail:" />
                    <Input id="email" type="text" placeholder="Digite o e-mail" onChange={this.handlerInputChange} value={this.state.candidato.email} />
                    <Label text="Objetivos:" />
                    <Input id="objetivos" type="text" placeholder="Digite o objetivo" onChange={this.handlerInputChange} value={this.state.candidato.objetivos} />
                    <Button className="pure-button pure-button-secondary" text="Gravar" />
                </form>
                <Footer text="Todos os direitos reservados" />
            </div>
        );
    }
}

export default FormCadastroCurriculo;
