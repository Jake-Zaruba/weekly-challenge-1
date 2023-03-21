import React from "react";

export default function NewExpense() {
  return (
    <div className="new-expense-container">
      <input type="number" placeholder="Add expense" />
      <button>Add</button>
    </div>
  );
}
