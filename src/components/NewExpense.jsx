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
      <form>
        <input
          className="value-input"
          value={expense}
          onChange={(e) => setExpense(Math.abs(e.target.value) * -1)}
          type="number"
          placeholder="$0"
        />
        <textarea
          className="text-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description..."
        />
      </form>
      <button onClick={() => addExpense()}>-</button>
    </div>
  );
}
