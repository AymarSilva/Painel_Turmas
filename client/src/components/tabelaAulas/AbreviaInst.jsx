
function AbreviaInst(props) {
  const formatado = props.data.split(' ');
    const nomeForm = formatado[0]+' '+formatado[formatado.length-1]; 
    return nomeForm;
}

export default AbreviaInst