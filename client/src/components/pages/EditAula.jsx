import React from 'react';
import FormAula from '../formAula/FormAula';
import NavBar from '../layout/NavBar';
import { useParams } from 'react-router-dom';

function EditAula() {
  const { id } = useParams();

  async function editAula( infoAula, id ) {
    try {
      console.log('Aula sendo edit: ',infoAula);
      const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoAula)
      });
      if (!resposta.ok) {
        const retorno = await resposta.json();
        console.log("Erro ao editar aula",retorno);
      }else{
        console.log("Aula editada");
        // alert("Aula editada com sucesso");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBar />
      <FormAula titulo={ 'Editar Aula' } textoBotao={ 'Editar' } id={ id }  handleSubmit={ editAula } tipo='Editada' />
    </>
  )  
}

export default EditAula
