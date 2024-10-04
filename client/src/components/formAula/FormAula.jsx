import React, { useState } from 'react';

export default function FormAula() {
    const [data, setData] = useState({
        date: '',
        horaInicio: '',
        horaFim: '',
        turma: '',
        instrutor: '',
        uniCurricular: '',
        ambiente: '',
        infoAulas: {}
    })

    async function cadastrarAula(e) {
        e.preventDefault(); //to not rerender the page
        const infoAula = {
            data: data.date,
            data_hora_inicio: data.horaInicio,
            data_hora_fim: data.horaFim,
            turma: data.turma,
            instrutor: data.instrutor,
            unidade_curricular: data.uniCurricular,
            ambiente: data.ambiente,
            chave: null
        }

        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(infoAula)
            });

            if (!resposta.ok) {
                console.log("Erro ao cadastrar")
            } else {
                alert('Aula cadastrada com sucesso');
            };

        } catch (error) {
            console.log(error);
        }

        console.log("data.date: ", data.date);
        // console.log(dataAula,horaInicio,horaInicio,horaFim,turma,instrutor);
    };

    function onChange(tipo) {
        return (e) => (
            setData((prev) => ({ ...prev, [tipo]: e.target.value }))
        )
    }

    return (
        <>
            <div className='container col-sm-12 col-md-6 col-lg-3 mt-3'>
                <h2 className='text-center'>Cadastro Aula</h2>
                <form onSubmit={cadastrarAula}>
                    <label htmlFor="" className="form-label">Data:</label>
                    <input type="date" className="form-control" value={data.date} onChange={onChange('date')} />

                    <label htmlFor="" className="form-label">Hora Inicio:</label>
                    <input type="time" className="form-control" name='' id='' value={data.horaInicio} onChange={onChange('horaInicio')} />

                    <label htmlFor="" className="form-label">Hora Fim:</label>
                    <input type="time" className="form-control" value={data.horaFim} onChange={onChange('horaFim')} />

                    <label htmlFor="" className="form-label">Turma:</label>
                    <input type="text" className="form-control" value={data.turma} onChange={onChange('turma')} />

                    <label htmlFor="" className="form-label">Instrutor:</label>
                    <input type="text" className="form-control" value={data.instrutor} onChange={onChange('instrutor')} />

                    <label htmlFor="" className="form-label">Unidade Curricular:</label>
                    <input type="text" className="form-control" value={data.uniCurricular} onChange={onChange('uniCurricular')} />

                    <label htmlFor="" className="form-label">Ambiente:</label>
                    <input type="text" className="form-control" value={data.ambiente} onChange={onChange('ambiente')} />

                    <a className='btn btn-danger mt-3' href="/">Cancelar</a>
                    <button className='btn btn-success mt-3 float-end' type='submit'>Salvar</button>
                </form>
            </div>
        </>
    )
}
