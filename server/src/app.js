import express from 'express';
import cors from 'cors';
import { criarAula, mostrarAulas } from '../controllers/aulaController.js';
// Calling express
const app = express();
const porta = 5000;

//Activating CORS
app.use(cors());

//Activating JSON
app.use(express.json());

// app.get('/', res.send("<h1>Funcionando</h1>"))

// Standard route for test API
app.get('/aulas', mostrarAulas);
app.post('/aulas', criarAula);

// Starting API and logging the port which servers running
app.listen(porta, () => console.log(`server is running on ${porta}`));