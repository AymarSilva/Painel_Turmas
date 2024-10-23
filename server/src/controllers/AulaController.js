import { createAula, deleteAula, showAula, showAulaId, updateAula } from "../models/AulaModel.js";
import { isThereAula, VerificaAula } from '../validations/AulaValidation.js';

export async function criarAula(req, res) {
    console.log("AulaController/criarAula");
    const aula = req.body;

    if (VerificaAula(aula)) {
        res.status(400).json({ message: 'Todas as propriedades devem ser preenchidas' })
    } else {
        try {
            const [status, resposta] = await createAula(aula);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        };
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

export async function mostrarAulasId(req, res) {
    const { id } = req.params;
    try {
        const [statusCode, retorno] = await showAulaId(id);
        res.status(200).json(retorno);
    } catch (error) {
        res.status(500).json(error);
    }
};

export async function atualizarAulas(req, res) {

    const aula = req.body;
    const { id } = req.params;

    if (VerificaAula(aula) || isThereAula(id)) {
        res.status(400).json({ message: 'Todas as propriedades devem ser preenchidas' })
    } else {
        try {
            const [statusCode, resposta] = await updateAula(aula, id);
            res.status(statusCode).json(resposta);
        } catch (error) {
            console.log("Erro em AulaController: ", error);
            res.status(500).json(error);
        };
    };
};

export async function deletarAula(req, res) {
    const { id } = req.params;

    if (isThereAula(id)) {
        res.status(400).json({ message: "id não existe" });
    } else {
        try {
            const [statusCode, retorno] = await deleteAula(id);
            res.status(statusCode).json(retorno);
        } catch (error) {
            res.status(500).json(error);
        };
    };
};