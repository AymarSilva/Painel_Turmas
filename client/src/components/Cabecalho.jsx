import Relogio from "./Relogio";
import Saudacao from "./Saudacao";

export default function Cabecalho() {
  return (
    // Calling the imported components inside the div
    <div className="cabecalho">
        <Saudacao />
        <Relogio />
    </div>
  );
};