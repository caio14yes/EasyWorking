import React, {Component} from 'react';
import FormCadastroCurriculo from './components/Form/CadastroCurriculo'
import ListarCurriculo from './components/Listar';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <FormCadastroCurriculo />
        <ListarCurriculo />
        <Footer/>
      </div>
    );
  }
}

export default App;
