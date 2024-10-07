import React from 'react';
import NavBar from '../layout/NavBar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import { Link } from 'react-router-dom';

function GestaoAulas() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='text-center mt-1'>Gestão de Aulas</h1>
        <div className='col-12 text-end my-3'>
          <Link className='btn btn-primary ms-auto' to='/cadastrarAula'>Cadastrar Aula</Link>
        </div>
        <TabelaAulas tipo='edit' />
      </div>
    </>
  );
};

export default GestaoAulas;