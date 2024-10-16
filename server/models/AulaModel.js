import mysql from 'mysql2/promise';
import db from '../db.js'

//Creating conection to the db with configs setted in db
const conexao = mysql.createPool(db);

export async function createAula(aula) {
    console.log("Model aula: ", aula);
    const sql = `INSERT INTO aulas ( date, horaInicio, horaFim,
    turma, instrutor, uniCurricular, ambiente )
    VALUES ( ?,?,?,?,?,?,? )
    `;
    const params = [aula.date, aula.horaInicio, aula.horaFim,
    aula.turma, aula.instrutor, aula.uniCurricular, aula.ambiente];

    try {
        const [ retorno ] = await this.conexao.query(sql, params);
        return [ 201, retorno ];
    } catch (error) {
        console.log( error );
        return [ 500, error ];
    };
};

