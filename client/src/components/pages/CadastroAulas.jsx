import React, { useState } from 'react';
import NavBar from '../layout/NavBar';

function CadastroAulas() {

    const [ data, setData ] = useState({
        date: '',
        horaInicio: '' ,
        horaFim: '',
        turma: '',
        instrutor: '',
        uniCurricular: '',
        ambiente: '',
        infoAulas: ''
    })

    function cadastrarAula(e) {
        e.preventDefault();
        console.log("data.date: ",data.date);
        // console.log(dataAula,horaInicio,horaInicio,horaFim,turma,instrutor);
    };

    function onChange(tipo) {
        return (e) => (
            setData((prev) => ({...prev, [tipo]: e.target.value}))
        )
    }

  return (
    <>
        <NavBar />
        {/* col-@media(small,medio,large)-size column */}
        <div className='container col-sm-12 col-md-6 col-lg-3 mt-3'>
            <h2 className='text-center'>Cadastro Aula</h2>
            <form onSubmit={ cadastrarAula }>
                <label htmlFor="" className="form-label">Data:</label>
                <input type="date" className="form-control" value={ data.date } onChange={ onChange('date') } />

                <label htmlFor="" className="form-label">Hora Inicio:</label>
                <input type="time" className="form-control" name='' id='' value={ data.horaInicio } onChange={ onChange('horaInicio') } />

                <label htmlFor="" className="form-label">Hora Fim:</label>
                <input type="time" className="form-control" value={ data.horaFim } onChange={ onChange('horaFim') } />

                <label htmlFor="" className="form-label">Turma:</label>
                <input type="text" className="form-control" value={ data.turma } onChange={ onChange('turma') }/>

                <label htmlFor="" className="form-label">Instrutor:</label>
                <input type="text" className="form-control" value={ data.instrutor } onChange={ onChange('instrutor') } />

                <label htmlFor="" className="form-label">Unidade Curricular:</label>
                <input type="text" className="form-control" value={ data.uniCurricular } onChange={ onChange('uniCurricular') } />

                <label htmlFor="" className="form-label">Ambiente:</label>
                <input type="text" className="form-control" value={ data.ambiente } onChange={ onChange('ambiente') } />

                <a className='btn btn-danger mt-3' href="">Cancelar</a>
                <button className='btn btn-success mt-3 float-end' type='submit'>Salvar</button>
            </form>
        </div>
    </>
  )
}

export default CadastroAulas
