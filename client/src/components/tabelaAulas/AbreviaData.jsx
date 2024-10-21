function AbreviaData(props) {
    const data = new (props.data);
    // const ano = data.getFullYear();
    // let mes = data.getMonth()+1;
    // let dia = data.getDate();

    // if (mes < 10) {
    //     mes = '0'+ mes;
    // };

    // if (dia.length < 2) {
    //     dia = '0'+dia;
    // };

    // const dataCompleta = [ ano, mes, dia ].join('-');
    // return dataCompleta;
    const hora = data.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' });
    return (hora);
}

export default AbreviaData