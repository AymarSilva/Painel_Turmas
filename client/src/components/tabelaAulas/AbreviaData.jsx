function AbreviaData(props) {
    const data = new Date(props.data);
    const hora = data.toLocaleTimeString('pt-br');
    return (hora);
}

export default AbreviaData