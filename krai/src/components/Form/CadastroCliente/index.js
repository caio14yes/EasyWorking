import React from 'react';
import Label from '../../Label';
import Input from '../../Input';
import Button from '../../Button';
import Header from '../../Header';
import './../../../pure.css'

class FormCadastroCliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: {
                nome: "",
                email: ""
            },
            validateErros: []
        }
    }
    //para usar apenas uma função ao invés de muitos para cada estado 
    handlerInputChange = (e) => {
        let cliente = this.state.cliente;
        cliente[e.target.id] = e.target.value;
        this.setState({
            cliente: cliente
        });
        console.log(this.state.cliente);
    }

    // handlerInputChangeEmail = (e) => {
    //     console.log("Email atualizado.");
    //     this.setState({
    //         email: e.target.value
    //     });
    // }
    validateNome(nome) {
        return nome.length !== 0 && nome.length <= 100;
    }
    validateEmail(email) {
        let re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        return re.test(email);
    }

    validate(clienteState) {
        let erros = []
        if (!this.validateNome(clienteState.nome)) {
            erros.push("Nome inválido")
        }
        if (!this.validateEmail(clienteState.email)) {
            erros.push("Email inválido")
        }
        this.setState(
            { validateErros: erros }
        )
        return erros;
    }
    resetClienteState(clienteState){
        clienteState.nome = "";
        clienteState.email = "";
        this.setState(
            { cliente: clienteState }
        )
    }
    handleSubmit = (event) => {
        event.preventDefault()

        let clienteState = this.state.cliente;
        let erros = this.validate(clienteState)

        if (erros.length === 0) {

            let storange = window.localStorage;

            // storange.setItem("clientes",JSON.stringify(clienteState));
            let listaClientes = JSON.parse(storange.getItem("clientes")) || [];
            listaClientes.push(clienteState);
            storange.setItem("clientes", JSON.stringify(listaClientes));
            console.log("Form submetido.");

         this.resetClienteState(clienteState)
        }
    }

    render() {
        let erros = this.state.validateErros
        return (
            <div>
                {erros.map((erros, index) => (<p key={index}>{erros}</p>))}
                <Header title="Cadastro de Cliente" />
                <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
                    <Label text="Nome:" />
                    <Input id="nome" type="text" placeholder="Digite o nome do cliente..." onChange={this.handlerInputChange} value={this.state.cliente.nome} />
                    <Label text="E-mail:" />
                    <Input id="email" type="email" placeholder="Digite o e-mail do cliente..." onChange={this.handlerInputChange} value={this.state.cliente.email} />
                    <Button className="pure-button pure-button-primary" text="Gravar" />
                </form>
            </div>
        );
    }
}

export default FormCadastroCliente;