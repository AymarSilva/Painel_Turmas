import { createAula } from "../models/AulaModel.js";

export async function criarAula(req, res) {
    console.log("AulaController/criarAula");
    const aula = req.body;

    try {
        const [ status, resposta ] = await createAula(aula);
        res.status(status).json(resposta)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

export async function mostrarAulas(req, res) {
    return res.status(200).json(
        [
            {
                "idpainel": "35c6",
                "date": "2024-10-18",
                "horaInicio": "12:00",
                "horaFim": "13:00",
                "turma": "AIT-DDS8",
                "instrutor": "Davi Filho",
                "uniCurricular": "Desenvolvimento de Apostas",
                "ambiente": "LAB-6165",
                "chave": null
            }
        ]
    );
};