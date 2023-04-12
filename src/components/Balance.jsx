import React from "react";
import MiniGoal from "./MiniGoal";
import { Outlet } from "react-router-dom";

export default function Balance({
  total,
  totalExpenses,
  totalDeposits,
  deposits,
  expenses,
  goals,
  goal1Progress,
  goal2Progress,
  goal3Progress,
}) {
  return (
    <>
      <Outlet />
      <div className="balance-container">
        <div className="total">
          <h4>Total Balance</h4>
          <h1>${total}</h1>
        </div>

        <h4 className="total-deposits">
          Deposits <br />
          <p>${totalDeposits}</p>
        </h4>
        <h4 className="total-expenses">
          Expenses <br /> <p>${Math.abs(totalExpenses)}</p>
        </h4>
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
        <MiniGoal
          goals={goals}
          goal1Progress={goal1Progress}
          goal2Progress={goal2Progress}
          goal3Progress={goal3Progress}
        />
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
      </div>
    </>
  );
}
