import React from 'react';
import FormAula from '../formAula/FormAula';
import NavBar from '../layout/NavBar';
import { useParams } from 'react-router-dom';

function EditAula() {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <FormAula titulo={ 'Editar Aula' } textoBotao={ 'Editar' } id={ id } />
    </>
  )  
}

export default EditAula
