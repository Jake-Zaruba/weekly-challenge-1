import React from "react";
import PieChart from "./PieChart";

export default function Balance({
  getTotal,
  total,
  totalExpenses,
  totalDeposits,
  deposits,
  expenses,
  funPercentage,
  billsPercentage,
  foodPercentage,
  transportationPercentage,
  funSum,
  billsSum,
  foodSum,
  transportationSum,
  btnClicked,
}) {
  //EXPENSES LIST CATEGORY COLOR VARIABLES
  function getLegendIconColor() {
    if (item.category === "Fun") {
      return 698269;
    } else if (item.category === "Bills") {
      return B99B6B;
    } else if (item.category === "Food") {
      return F1DBBF;
    } else if (item.category === "Food") {
      return AA5656;
    }
  }

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
        funPercentage={funPercentage}
        billsPercentage={billsPercentage}
        foodPercentage={foodPercentage}
        transportationPercentage={transportationPercentage}
        funSum={funSum}
        billsSum={billsSum}
        foodSum={foodSum}
        transportationSum={transportationSum}
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
      <div id="recent-expense">
        <h4>Recent</h4>
        {expenses.length === 0 ? (
          <p>No recent expenses</p>
        ) : (
          expenses.map((item) => {
            return (
              <>
                <div className="recent-item" key={item.id}>
                  <p>{item.description}</p>

                  <p>${Math.abs(item.amount)}</p>
                  <div
                    className="legend-icon"
                    style={{
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}
