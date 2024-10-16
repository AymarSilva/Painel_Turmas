import express from 'express';
import cors from 'cors';
import { criarAula, mostrarAulas } from '../controllers/aulaController.js';
// Calling express
const app = express();
const porta = 5000;

app.use(cors());

// Standard route for test API
app.get('/', mostrarAulas);
app.post('/aulas', criarAula);

// Starting API and logging the port which servers running
app.listen(porta, () => console.log(`server is running on ${porta}`));