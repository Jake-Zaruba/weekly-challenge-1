import React from "react";

export default function Deposits({ deposit, setDeposit, addDeposit }) {
  return (
    <div className="deposits-container">
      <input
        value={deposit}
        onChange={(e) => {
          setDeposit(Math.abs(e.target.value));
          console.log(deposit);
        }}
        type="number"
        placeholder="Add deposit"
      />
      <button onClick={() => addDeposit()}>Add</button>
    </div>
  );
}
