import { createAula, showAula } from "../models/AulaModel.js";

export async function criarAula(req, res) {
    console.log("AulaController/criarAula");
    const aula = req.body;

    try {
        const [ status, resposta, banco ] = await createAula(aula);
        res.status(status).json(resposta,banco)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

export async function mostrarAulas(req, res) {
    try {
        const [ statusCode, resposta ] = await showAula();
        res.status(statusCode).json(resposta);
    } catch (error) {
        console.log("Erro em AulaController: ",error);
        res.status(500).json(error);
    }
};