import React, { useEffect, useState } from 'react';
import NavBar from '../layout/NavBar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import { Link, useParams } from 'react-router-dom';

function GestaoAulas() {
  // { tipo } refers to the variable on the URL
    // UseParams must be declared as Route on App.jsx as /gerirAula/:tipo
  const { tipo } = useParams();
  //showAlert stands for the state of the message, initial value is false as there's no interaction by the user
  const [showAlert, setShowAlert] = useState(false);
  //Every single message got a type a message and a class
  const [sigMsg, setSigMsg] = useState(tipo);
  const [classMsg, setClassMsg] = useState('');
  const [textoMsg, setTextoMsg] = useState('');

  //UseEffect rerendering the alert in the background
  useEffect(() => {
    //A conditional whether sigMsg does exist
    if (sigMsg) {
      setShowAlert(true);
      typeMessage(sigMsg);
      //Delayed the message a gives it '' to sigMsg just using setTimeOut
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [sigMsg]);

  //the Delete is quite whimsical in this project, as so, it needs a unique function
  function mensagemDelete(){
    setSigMsg('Deletada');
  };

  /*
    typeMessage is a function that uses switch case which sort the codes
    separetely and attributes a class and message
  */

  function typeMessage(msg) {
    switch (msg) {
      case 'Cadastrada':
        setClassMsg('alert alert-success');
        setTextoMsg('Aula Cadastrada');
        break;
      case 'Deletada':
        setClassMsg('alert alert-danger');
        setTextoMsg('Aula Deletada');
        break;
      case 'Editada':
        setClassMsg('alert alert-primary');
        setTextoMsg('Aula Editada');
        break;
      default:
        break;
    }
  };

  return (
    <>
    {/* Import a navBar on GestaoAulas */}
      <NavBar />
      <div className='container'>
        <h1 className='text-center mt-1'>Gestão de Aulas</h1>
        {/* Renders showAlert conditionally using && */}
        {showAlert && <div className={classMsg}>{textoMsg}</div>}
        <div className='col-12 text-end my-3'>
          {/* Link is a react-router-dom that allows browse through
          without rerender the page over and over */}
          <Link className='btn btn-primary ms-auto' to='/cadastrarAula'>Cadastrar Aula</Link>
        </div>
        {/* TabelaAulas receives tipo='edit' which makes the document responses with suttle nuance from the original
        also there's the mensagemDelete on it in order to delete the alert */}
        <TabelaAulas tipo='edit' onDeleteSuccess={ mensagemDelete } />
      </div>
    </>
  );
};

export default GestaoAulas;