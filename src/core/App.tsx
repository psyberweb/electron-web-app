import React from "react";

function App() {
  const isElectron = process.env.REACT_APP_PLATFORM === "electron";
  if (isElectron) {
    const { ipcRenderer } = window.require('electron');
    ipcRenderer.send('mensagem-para-o-processo-principal', 'Olá, mundo!');
    console.log('Aplicação rodando no Electron');
  } else {
    console.log('Aplicação rodando no navegador');
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Apolo Front End web e electron</p>
        {isElectron ? (
          <p>Estou rodando no Electron</p>
        ) : (
          <p>Estou rodando no navegador</p>
        )}
      </header>
    </div>
  );
}

export default App;
