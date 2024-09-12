import Relogio from "./Relogio";
import Saudacao from "./Saudacao";

import styles from './Cabecalho.module.css';

export default function Cabecalho() {
  return (
    // Calling the imported components inside the div
    <div className={styles.cabecalho}>
        <Saudacao />
        <Relogio />
    </div>
  );
};