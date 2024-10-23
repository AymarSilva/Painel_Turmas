import mysql from 'mysql2/promise';
import db from '../../db.js'

//Creating conection to the db with configs setted in db
const conexao = mysql.createPool(db);

export async function showAula() {
  const sql = `SELECT * FROM aulas`

  try {
    const [retorno] = await conexao.query(sql);
    return [200, retorno]
  } catch (error) {
    console.log("Erro em AulaModel: ", error);
    return [500, error];
  };
};

export async function createAula(aula) {
  console.log("Model aula: ", aula);
  const sql = `INSERT INTO aulas ( date, horaInicio, horaFim,
    turma, instrutor, uniCurricular, ambiente )
    VALUES ( ?,?,?,?,?,?,? )        `;
  const params = [aula.date, aula.horaInicio, aula.horaFim,
  aula.turma, aula.instrutor, aula.uniCurricular, aula.ambiente];

  try {
    const [ retorno ] = await conexao.query(sql, params);
    console.log("aula cadastrada");
    return [201, retorno];
  } catch (error) {
    console.log(error);
    return [500, error];
  };
};

export async function showAulaId(id) {
  const conexao = mysql.createPool(db);

  console.log("mostrando uma aula");

  const sql = `SELECT * FROM aulas where idpainel = ?`;

  const params = [ id ];

  try {
    const [ retorno ] = await conexao.query( sql, params );
    return [ 200, retorno[0] ];
  } catch (error) {
    console.log(error);
    return [ 500, error ]
  };
};

export async function updateAula(aula, id) {
  const conexao = mysql.createPool(db);

  const sql = `UPDATE aulas SET
  date = ?,
  horaInicio = ?,
  horaFim = ?,
  turma = ?,
  instrutor = ?,
  uniCurricular = ?,
  ambiente = ?
  WHERE idpainel = ?
  `;

  const params = [aula.date, aula.horaInicio, aula.horaFim,
  aula.turma, aula.instrutor, aula.uniCurricular, aula.ambiente, id]; 

  try {
    const [ retorno ] = await conexao.query( sql, params );

    if (retorno.affectedRows < 1) {
      return [ 404, `Aula ${id} não encontrada` ];
    };

    return [ 200, `Aula ${id} Atualizada` ];

  } catch (error) {
    console.log(error);
    return [ 500, error ];
  }
};

export async function deleteAula(id) {
  const conexao = mysql.createPool(db);

  console.log("deletando aula");

  const sql = `DELETE FROM aulas where idpainel = ?`;

  const params = [ id ];

  try {
    const [ retorno ] = await conexao.query( sql, params );

    if (retorno.affectedRows < 1) {
      return [ 404, `Aula ${id} não encontrada` ];
    };

    return [ 200, `Aula ${id} deletada` ];

  } catch (error) {
    console.log(error);
    return [ 500, error ]
  };
};