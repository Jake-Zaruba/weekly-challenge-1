import React from "react";

export default function Deposits({
  deposit,
  setDeposit,
  addDeposit,
  description,
  setDescription,
}) {
  return (
    <div className="deposits-container">
      <input
        value={deposit}
        onChange={(e) => {
          setDeposit(Math.abs(e.target.value));
        }}
        type="number"
        placeholder="Add deposit"
      />
      <input
        value={description}
        onChange={(e) => {
          console.log(description);
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="Description"
      />
      <button onClick={() => addDeposit()}>Add</button>
    </div>
  );
}
