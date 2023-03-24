import React from "react";

export default function NewExpense({
  expense,
  setExpense,
  addExpense,
  description,
  setDescription,
  category,
  setCategory,
  btnClicked,
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
      <button className="form-btn" onClick={() => addExpense()}>
        -
      </button>
      <div className="category-btn-container">
        <button
          onClick={() => setCategory("Fun")}
          className={
            !btnClicked ? "category-btn" : "category-btn cat-1-animation"
          }
        >
          🎉
        </button>
        <button
          onClick={() => setCategory("Bills")}
          className={
            !btnClicked ? "category-btn" : "category-btn cat-2-animation"
          }
        >
          🧾
        </button>
        <button
          onClick={() => setCategory("Food")}
          className={
            !btnClicked ? "category-btn" : "category-btn cat-3-animation"
          }
        >
          🍕
        </button>
        <button
          onClick={() => setCategory("Transportation")}
          className={
            !btnClicked ? "category-btn" : "category-btn cat-4-animation"
          }
        >
          🚗
        </button>
      </div>
    </div>
  );
}
