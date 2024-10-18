import { createAula, deleteAula, showAula, updateAula } from "../models/AulaModel.js";

export async function criarAula(req, res) {
    console.log("AulaController/criarAula");
    const aula = req.body;

    try {
        const [status, resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

export async function mostrarAulas(req, res) {
    try {
        const [statusCode, resposta] = await showAula();
        res.status(statusCode).json(resposta);
    } catch (error) {
        console.log("Erro em AulaController: ", error);
        res.status(500).json(error);
    }
};

export async function atualizarAulas(req, res) {

    const aula = req.body;
    const { id } = req.params;
    console.log("atualizarAulas: ", id);

    try {
        const [statusCode, resposta] = await updateAula(aula, id);
        res.status(statusCode).json(resposta);
    } catch (error) {
        console.log("Erro em AulaController: ", error);
        res.status(500).json(error);
    };
};

export async function deletarAula( req, res ) {
    const { id } = req.params;
    try {
        const [statusCode, retorno] = await deleteAula(id);
        res.status(statusCode).json(retorno);
    } catch (error) {
        res.status(500).json(error);
    }
};