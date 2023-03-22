import React from "react";

export default function NewExpense({ expense, setExpense, addExpense }) {
  return (
    <div className="new-expense-container">
      <input
        value={expense}
        onChange={(e) => setExpense(Math.abs(e.target.value) * -1)}
        type="number"
        placeholder="Add expense"
      />
      <button onClick={() => addExpense()}>Add</button>
    </div>
  );
}
