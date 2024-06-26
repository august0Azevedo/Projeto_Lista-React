import React, { useState } from 'react';

import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
        <div>
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Adicionar nova tarefa"
          />
          <button onClick={adicionarTarefa}>Adicionar</button>
        </div>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa} <button onClick={() => removerTarefa(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;