import FormAula from '../formAula/FormAula';
import NavBar from '../layout/NavBar';

function CadastroAulas() {

async function cadastrarAula(infoAula) {
    try {
        const resposta = await fetch('http://localhost:5000/aulas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(infoAula)
        });

        if (!resposta.ok) {
            console.log("Erro ao cadastrar")
        } else {
            alert('Aula cadastrada com sucesso');
        };

    } catch (error) {
        console.log("erro: ",error);
    }
};

  return (
    <>
      <NavBar />
      <FormAula titulo={'Cadastrar Aula'} textoBotao={'Criar'} handleSubmit={ cadastrarAula } />
    </>
  )  
}

export default CadastroAulas
