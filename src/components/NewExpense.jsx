import React from "react";
import PieChart from "./PieChart";
import { useState } from "react";

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
  funPercentage,
  billsPercentage,
  foodPercentage,
  transportationPercentage,
  btnClicked,
  jan,
  feb,
  mar,
  apr,
  may,
  jun,
  jul,
  aug,
  sep,
  oct,
  nov,
  dec,
}) {
  const categoryAlert = () => {
    alert("Please select a category");
  };
  return (
    <>
      <div className="new-expense-container">
        <div className="add-expense-container">
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
        <div className="pie-chart-container">
          <PieChart
            funPercentage={funPercentage}
            billsPercentage={billsPercentage}
            foodPercentage={foodPercentage}
            transportationPercentage={transportationPercentage}
            btnClicked={btnClicked}
          />
          <div className="legend">
            <div className="legend-icon"></div>
            <span>Fun</span>
            <div className="legend-icon"></div>
            <span>Bills</span>
            <div className="legend-icon"></div>
            <span>Food</span>
            <div className="legend-icon"></div>
            <span>Transporation</span>
          </div>
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
        <div className="bar-graph-container">
          <div className="month-container">
            <div className="jan-bar">{jan}</div>
            <span>Jan</span>
          </div>
          <div className="month-container">
            <div className="feb-bar">{feb}</div>
            <span>Feb</span>
          </div>
          <div className="month-container">
            <h2 className="mar-bar">{mar}</h2>
            <span>Mar</span>
          </div>
          <div className="month-container">
            <div className="apr-bar">{apr}</div>
            <span>Apr</span>
          </div>
          <div className="month-container">
            <div className="may-bar">{may}</div>
            <span>May</span>
          </div>
          <div className="month-container">
            <div className="jun-bar">{jun}</div>
            <span>Jun</span>
          </div>
          <div className="month-container">
            <div className="jul-bar">{jul}</div>
            <span>Jul</span>
          </div>
          <div className="month-container">
            <div className="aug-bar">{aug}</div>
            <span>Aug</span>
          </div>
          <div className="month-container">
            <div className="sep-bar">{sep}</div>
            <span>Sep</span>
          </div>
          <div className="month-container">
            <div className="oct-bar">{oct}</div>
            <span>Oct</span>
          </div>
          <div className="month-container">
            <div className="nov-bar">{nov}</div>
            <span>Nov</span>
          </div>
          <div className="month-container">
            <div className="dec-bar">{dec}</div>
            <span>Dec</span>
          </div>
        </div>
      </div>
    </>
  );
}
