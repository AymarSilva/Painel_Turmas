import { useEffect, useState } from "react";

import AbreviaData from "./AbreviaData";
import AbreviaUC from "./AbreviaUC";
import AbreviaInst from "./AbreviaInst";
import AbreviaAmb from "./AbreviaAmb";

function TabelaAulas() {
    const [aulas,setAulas] = useState([]);

    useEffect(() => {
        InserirAulas();
    },[]);

    async function InserirAulas() {
        try {
            const resposta = await fetch('http://localhost:5000/aulas',{
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            });

            if(!resposta){
                throw new Error("Erro ao buscar aulas");
            }

            const consulta = await resposta.json();
            setAulas(consulta);
        } catch (error) {
            
        }
    };

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Início</th>
                    <th>Fim</th>
                    <th>Turma</th>
                    <th>Instrutor</th>
                    <th>Unidade Curricular</th>
                    <th>Ambiente</th>
                </tr>
            </thead>
            <tbody>
                {          
                    aulas.map((aula) => {
                        return(
                           <tr key={aula.id}>
                                <td><AbreviaData data={aula.data_hora_inicio} /></td>
                                <td><AbreviaData data={aula.data_hora_fim} /></td>
                                <td>{aula.turma}</td>
                                <td><AbreviaInst data={aula.instrutor} /></td>
                                <td><AbreviaUC data={aula.unidade_curricular}/></td>
                                <td><AbreviaAmb data={aula.ambiente} /></td>
                            </tr>
                        )  
                    })
                }
                    
            </tbody>            
        </table>
    </div>
  )
}

export default TabelaAulas