import React from "react";
import PieChart from "./PieChart";

export default function Balance({
  getTotal,
  total,
  totalExpenses,
  totalDeposits,
  deposits,
  expenses,
  getPercentage,
  funSum,
  billsSum,
  foodSum,
  transportationSum,
}) {
  return (
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
      <div id="recent-deposit">
        <h4>Recent</h4>
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
      <PieChart
        total={total}
        expenses={expenses}
        totalExpenses={totalExpenses}
        totalDeposits={totalDeposits}
        getPercentage={getPercentage}
        funSum={funSum}
        billsSum={billsSum}
        foodSum={foodSum}
        transportationSum={transportationSum}
      />
      <div id="recent-expense">
        <h4>Recent</h4>
        {expenses.length === 0 ? (
          <p>No recent expenses</p>
        ) : (
          expenses.map((item) => {
            return (
              <div className="recent-item" key={item.id}>
                <p>{item.description}</p>

                <p>${Math.abs(item.amount)}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
