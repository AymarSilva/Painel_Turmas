const propriedades = [
    "date",
    "horaInicio",
    "horaFim",
    "turma",
    "instrutor",
    "uniCurricular",
    "ambiente"
];

export function isThereAula(valor) {
    return valor === null || valor === '' || valor === undefined;
};

// export function hasOwnProperty(aula) {
//     return propriedades.every(prop => aula.hasOwnProperty(prop));
// };

export function VerificaAula(aula) {
    // if (hasOwnProperty(aula)) {
      return propriedades.some(prop => isThereAula(aula[prop]));
    // }else{
    //     return false;
    // };
};