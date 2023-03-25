import React from "react";

export default function NewExpense({
  expense,
  setExpense,
  addExpense,
  description,
  setDescription,
  category,
  assignCategory,
  setCategory,
  btnClicked,
  btn1,
  btn2,
  btn3,
  btn4,
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
          onClick={() => assignCategory(btn1)}
          className={
            !btnClicked ? "category-btn" : "category-btn cat-1-animation"
          }
        >
          🎉
        </button>
        <button
          onClick={() => assignCategory(btn2)}
          className={
            !btnClicked ? "category-btn" : "category-btn cat-2-animation"
          }
        >
          🧾
        </button>
        <button
          onClick={() => assignCategory(btn3)}
          className={
            !btnClicked ? "category-btn" : "category-btn cat-3-animation"
          }
        >
          🍕
        </button>
        <button
          onClick={() => assignCategory(btn4)}
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
