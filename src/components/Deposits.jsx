import React from "react";

export default function Deposits({ deposit, setDeposit, calculateTotal }) {
  return (
    <div className="deposits-container">
      <input
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
        type="number"
        placeholder="Add deposit"
      />
      <button onClick={() => calculateTotal()}>Add</button>
    </div>
  );
}
