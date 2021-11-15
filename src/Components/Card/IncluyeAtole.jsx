import React, { useState } from "react";
import SaborAtole from "./SaborAtole";

const IncluyeAtole = ({ incluyeAtole, setIncluyeAtole }) => {
  const [sabor, setSabor] = useState("chocolate");

  const handlerNoIncluyeAtole = () => setIncluyeAtole(false);
  const handlerSiIncluyeAtole = () => setIncluyeAtole(true);

  const colorSabor = {
      'cajeta': 'rosybrown',
      'chocolate': 'brown',
      'fresa': 'pink',
  }


  return (
    <div>
      <button
        onClick={handlerNoIncluyeAtole}
        style={{ backgroundColor: incluyeAtole ? "lightgray" : "green" }}
      >
        No incluye atole
      </button>
      <button
        onClick={handlerSiIncluyeAtole}
        style={{ backgroundColor:  incluyeAtole ? colorSabor[sabor] : "lightgray"}}
      >
        Sí incluye atole
      </button>
      {incluyeAtole && <SaborAtole setSabor={setSabor} />}
    </div>
  );
};

export default IncluyeAtole;
