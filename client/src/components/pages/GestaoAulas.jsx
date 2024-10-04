import React from 'react';
import NavBar from '../layout/NavBar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';

function GestaoAulas() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1>Gestão de Aulas</h1>
        <TabelaAulas tipo='edit' />
      </div>
    </>
  );
};

export default GestaoAulas;