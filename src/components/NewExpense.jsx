import React from "react";
export default function NewExpense({
  expense,
  setExpense,
  addExpense,
  expenses,
  totalExpenses,
  description,
  setDescription,
  assignCategory,
  btn1,
  btn2,
  btn3,
  btn4,
  btnClicked,
}) {
  const categoryAlert = () => {
    alert("Please select a category");
  };
  return (
    <>
      <div className="add-amount-container">
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
            // onBlur={() => categoryAlert()}
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
      <div className="total">
        <h4>Expenses</h4>
        <h1>${Math.abs(totalExpenses)}</h1>
      </div>

      <div className="recent-container">
        <h4>Recent</h4>
        <div id="recent-expense">
          {expenses.length === 0 ? (
            <p>No recent expenses</p>
          ) : (
            expenses.map((item) => {
              return (
                <>
                  <div className="recent-item" key={item.id}>
                    <p>{item.description}</p>
                    <div className="price-category-container">
                      <p>${Math.abs(item.amount)}</p>
                      <div
                        className="legend-icon"
                        style={{
                          borderRadius: "50%",
                          backgroundColor: `#${
                            item.category === "Fun"
                              ? "698269"
                              : item.category === "Bills"
                              ? "B99B6B"
                              : item.category === "Food"
                              ? "F1DBBF"
                              : item.category === "Transportation"
                              ? "AA5656"
                              : "f1dbbf5e"
                          }`,
                        }}
                      ></div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
