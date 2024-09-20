import LateralImagens from '../LateralImagens/LateralImagens';
import Cabecalho from '../layout/Cabecalho';
import TabelaAulas from '../tabelaAulas/TabelaAulas';


export default function Home() {
  return (
    <>
      <Cabecalho />
      <TabelaAulas />
      <LateralImagens />
    </>
  );
};