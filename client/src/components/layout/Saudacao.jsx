import { useEffect, useState } from "react";
import styles from './Saudacao.module.css';

//Creating a welcome message
export default function Saudacao() {
    //Setting a state saudacao as null 
    const [saudacao,setSaudacao] = useState('');

    //UseEffect calling variabilidade at an interval 1s
    useEffect(()=>{
        variabilidade();
        const intervalo = setInterval(variabilidade,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    },[]);

    //Starting to create a text for the message to be displayed
    function variabilidade() {
        //Stating an object of date type
        let agora = new Date();
        
        //Getting hour from the data type
        const hora = agora.getHours();

        //Getting the day from the data type
        const dia = agora.getDay();

        //Stating the welcome text as an empty string
        let texto = '';

        //Stating the weekdays and weekends in an array
        const diaSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
        
        //Adding the day of the week in texto
        texto+=diaSemana[dia];

        if (hora>=18) {
            texto+= ' Boa Noite';
        } else if(hora>=12){
            texto+= ' Boa Tarde';
        }else{
            texto+= ' Bom Dia';
        };

        //Calling the rendering through the state with the has-been formatted string as argument
        setSaudacao(texto);
    }
  return (
    //Calling the state inside a header 1
    <h1 className={styles.saudacao}>
        {saudacao}
    </h1>
  );
};