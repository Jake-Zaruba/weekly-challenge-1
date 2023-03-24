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
      <form>
        <input
          className="value-input"
          value={deposit}
          onChange={(e) => {
            setDeposit(Math.abs(e.target.value));
          }}
          type="number"
          placeholder="$0"
        />

        <textarea
          className="text-input"
          value={description}
          onChange={(e) => {
            console.log(description);
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Description..."
        />
      </form>
      <button className="form-btn" onClick={() => addDeposit()}>
        +
      </button>
    </div>
  );
}
