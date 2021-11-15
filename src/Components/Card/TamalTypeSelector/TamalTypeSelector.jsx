import React from "react";
import styles from './TamalTypeSelector.module.scss'

const TamalTypeSelector = ({oaxaqueno, setOaxaqueno}) => {

  const handlerClickMaiz = () => setOaxaqueno(false);
  const handlerClickOaxaqueno = () => setOaxaqueno(true);



  return (
    <div className={`${oaxaqueno ? styles.fondoBlue : ''}`}>
      <button
        onClick={handlerClickMaiz}
        style={{ backgroundColor: oaxaqueno ? "lightgray" : "green" }}
      >
        Hoja de maíz
      </button>
      <button
        onClick={handlerClickOaxaqueno}
        style={{ backgroundColor: oaxaqueno ? "green" : "lightgray" }}
      >
        Oaxaqueño
      </button>
    </div>
  );
};

export default TamalTypeSelector;
