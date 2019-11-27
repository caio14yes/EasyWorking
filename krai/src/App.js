import React, {Component} from 'react';
import FormCadastroCurriculo from './components/Form/CadastroCurriculo'
import ListarCurriculo from './components/Listar';


class App extends Component {
  render() {
    return (
      <div>
        <FormCadastroCurriculo />
        <ListarCurriculo />
      </div>
    );
  }
}

export default App;
