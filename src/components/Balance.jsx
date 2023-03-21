import React from "react";

export default function Balance({ getTotal, setTotal, total }) {
  return (
    <div className="balance-container">
      <h1>{total}</h1>
      <button onClick={() => getTotal()}>Get total</button>
    </div>
  );
}
