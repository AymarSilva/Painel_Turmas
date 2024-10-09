import { useEffect, useState } from "react";

import AbreviaData from "./AbreviaData";
import AbreviaUC from "./AbreviaUC";
import AbreviaInst from "./AbreviaInst";
import AbreviaAmb from "./AbreviaAmb";
import { Link } from 'react-router-dom';

import styles from "./TabelaAulas.module.css";

function TabelaAulas({ tipo, onDeleteSuccess }) {
    
    const [aulas, setAulas] = useState([]);

    useEffect(() => {
        InserirAulas();
    }, []);

    async function InserirAulas() {
        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!resposta) {
                throw new Error("Erro ao buscar aulas");
            }

            const consulta = await resposta.json();
            setAulas(consulta);
        } catch (error) {
            console.log("erro: ", error)
        }
    };

    async function deletarAulas(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
                method: 'DELETE',
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
        if (!resposta.ok) {
            throw new Error("Erro ao deletar aula"), JSON.stringify(resposta)
        }
        else{
            setAulas(aulas.filter(aula => aula.id !== id));
            // alert("Aula deletada");
            onDeleteSuccess();
        }
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <div className={`${styles.aulas}
    ${tipo === 'edit' ? `container ${styles.edit}` : ''}`}>
            <table className="tabelaAulas">
                <thead>
                    <tr>
                        <th>Início</th>
                        <th>Fim</th>
                        <th>Turma</th>
                        <th>Instrutor</th>
                        <th>Unidade Curricular</th>
                        <th>Ambiente</th>
                        {tipo === 'edit' &&
                            <th>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {
                        aulas.map((aula) => (
                            <tr key={aula.id}>
                                <td><AbreviaData data={aula.data_hora_inicio} /></td>
                                <td><AbreviaData data={aula.data_hora_fim} /></td>
                                <td>{aula.turma}</td>
                                <td><AbreviaInst data={aula.instrutor} /></td>
                                <td><AbreviaUC data={aula.uniCurricular} /></td>
                                <td><AbreviaAmb data={aula.ambiente} /></td>
                                {tipo === 'edit' && 
                                    <td>
                                         <Link to={`/editarAula/${aula.id}`} className={`btn btn-warning ${styles.bot}`}>Edit</Link>
                                         <button
                                         className="btn btn-danger ms-2"
                                         onClick={ () => deletarAulas(aula.id) }
                                         >Remove</button>
                                    </td>                 
                                }    
                            </tr>
                        ))}                    
                </tbody>
            </table>
        </div>
    )
}

export default TabelaAulas