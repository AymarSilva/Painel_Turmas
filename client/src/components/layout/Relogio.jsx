import { useState,useEffect } from "react";
import styles from './Relogio.module.css';

// Stating relogio function
export default function Relogio() {
    // Stating hour as state
    const [hora,setHora] = useState('');

    //UseEffect for call setInterval by rendering
    useEffect(() => {
        //Setting interval 1s for variabilidade()
        variabilidade();

        const intervalo = setInterval(variabilidade,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    },[]);

    //Getting hour, minutes, seconds by stated function variabilidade 
    function variabilidade() {
        //Setting agora as date object
        let agora = new Date();
        //Render just 2 digits hour minutes and seconds
        const horario = agora.toLocaleTimeString('pt-br',{hour:'2-digit',minute: '2-digit',second: '2-digit'});
        //Setting horario as hora
        setHora(horario);
    };
  return (
    //Returning a html tag with the specifically hours has been defined
    <h2 className={styles.relogio}>
        {hora}
    </h2>
  );
};