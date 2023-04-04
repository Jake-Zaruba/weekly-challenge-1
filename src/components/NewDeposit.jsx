import React from "react";

export default function NewDeposit({
  deposit,
  deposits,
  setDeposit,
  totalDeposits,
  addDeposit,
  description,
  setDescription,
  assignGoal,
  goal1,
  goal2,
  goal3,
  goal4,
  btnClicked,
}) {
  return (
    <>
      <div className="add-amount-container">
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
              // console.log(description);
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Description..."
          />
        </form>
        <button className="form-btn" onClick={() => addDeposit()}>
          +
        </button>
        <div className="category-btn-container">
          <button
            onClick={() => assignGoal(goal1)}
            // onBlur={() => categoryAlert()}
            className={
              !btnClicked ? "category-btn" : "category-btn cat-1-animation"
            }
          >
            🏠
          </button>
          <button
            onClick={() => assignGoal(goal2)}
            className={
              !btnClicked ? "category-btn" : "category-btn cat-2-animation"
            }
          >
            🚗
          </button>
          <button
            onClick={() => assignGoal(goal3)}
            className={
              !btnClicked ? "category-btn" : "category-btn cat-3-animation"
            }
          >
            🌴
          </button>
          <button
            onClick={() => assignGoal(goal4)}
            className={
              !btnClicked ? "category-btn" : "category-btn cat-4-animation"
            }
          >
            🚫
          </button>
        </div>
      </div>
      <div className="total">
        <h4>Deposits</h4>
        <h1>${Math.abs(totalDeposits)}</h1>
      </div>
      <div className="recent-container">
        <h4>Recent</h4>
        <div id="recent-deposit">
          {deposits.length === 0 ? (
            <p>No recent deposits</p>
          ) : (
            deposits.map((item) => {
              return (
                <div className="recent-item" key={item.id}>
                  <p>{item.description}</p>

                  <p>${item.amount}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
