import React, { useEffect, useState } from 'react';

export default function FormAula({ titulo, textoBotao, handleSubmit, id }) {

    const [aula, setAula] = useState({
        date: '',
        horaInicio: '',
        horaFim: '',
        turma: '',
        instrutor: '',
        uniCurricular: '',
        ambiente: '',
        chave: null,
    })

    function onChange(tipo) {
        return (e) => (
            setAula((prev) => ({ ...prev, [tipo]: e.target.value }))
        )
    };

    function submit(e) {
        e.preventDefault();
        handleSubmit(aula)
    };

    useEffect(() => {
        if (id){
            baixarAula(id)
        }
    }, []);
        

    async function baixarAula(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            if (!resposta.ok) {
                throw new Error("Erro ao buscar aula");
            }else{
                console.log(JSON.stringify(resposta));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='container col-sm-12 col-md-6 col-lg-3 mt-3'>
                <h2 className='text-center'>{ titulo }</h2>
                <form onSubmit={ submit }>
                    <label htmlFor="" className="form-label">Data:</label>
                    <input type="date" className="form-control" value={aula.date} onChange={onChange('date')} />

                    <label htmlFor="" className="form-label">Hora Inicio:</label>
                    <input type="time" className="form-control" name='' id='' value={aula.horaInicio} onChange={onChange('horaInicio')} />

                    <label htmlFor="" className="form-label">Hora Fim:</label>
                    <input type="time" className="form-control" value={aula.horaFim} onChange={onChange('horaFim')} />

                    <label htmlFor="" className="form-label">Turma:</label>
                    <input type="text" className="form-control" value={aula.turma} onChange={onChange('turma')} />

                    <label htmlFor="" className="form-label">Instrutor:</label>
                    <input type="text" className="form-control" value={aula.instrutor} onChange={onChange('instrutor')} />

                    <label htmlFor="" className="form-label">Unidade Curricular:</label>
                    <input type="text" className="form-control" value={aula.uniCurricular} onChange={onChange('uniCurricular')} />

                    <label htmlFor="" className="form-label">Ambiente:</label>
                    <input type="text" className="form-control" value={aula.ambiente} onChange={onChange('ambiente')} />

                    <a className='btn btn-danger mt-3' href="/">Cancelar</a>
                    <button className='btn btn-success mt-3 float-end' type='submit'>{ textoBotao }</button>
                </form>
            </div>
        </>
    )
}
