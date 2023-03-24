import React from "react";

export default function NewExpense({
  expense,
  setExpense,
  addExpense,
  description,
  setDescription,
}) {
  return (
    <div className="new-expense-container">
      <input
        value={expense}
        onChange={(e) => setExpense(Math.abs(e.target.value) * -1)}
        type="number"
        placeholder="Add expense"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <button onClick={() => addExpense()}>Add</button>
    </div>
  );
}
