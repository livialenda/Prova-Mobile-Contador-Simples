import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{contador}</h1>

      <button onClick={() => setContador(contador + 1)}>
        +
      </button>

      <button onClick={() => setContador(contador - 1)} style={{ marginLeft: "10px" }}>
        -
      </button>
    </div>
  );
}