import React from 'react';
import { useEffect, useState } from 'react';
import styles from "./LateralImagens.module.css";

function LateralImagens() {
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        atualizarImagens();
    },[]);

    async function atualizarImagens() {
        
        try {
            const response = await fetch("http://localhost:5000/imagens",{
                method: 'GET',
                headers: {
                    'Content-Type':"application/json"
                }
            })
        if (!response) {
            throw new Error("Erro ao buscar aulas")

        };

        const consulta = await response.json();
        setImagens(consulta);

        } catch (error) {
            console.log("erro: ",error);
        };
    };

  return (
        <div className={styles.lateral}>
            {
                imagens.map((imagem) => (
                    <div key={imagem.id}>
                        <img src={imagem.caminho} alt={imagem.alt} />
                    </div>
                ))
            }
        </div>
  )
}

export default LateralImagens