import React from "react";

export default function Balance({
  getTotal,
  total,
  totalExpenses,
  totalDeposits,
  deposits,
  expenses,
}) {
  return (
    <div className="balance-container">
      <div className="total">
        <h4>Total Balance</h4>
        <h1>${total}</h1>
      </div>
      {/* <button onClick={() => getTotal()}>Get total</button> */}
      {/* <h2>{totalDeposits}</h2> */}
      <h4 className="total-deposits">
        Income <br />
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
                &nbsp;&nbsp;&nbsp;&nbsp;
                <b>${item.amount}</b>
              </div>
            );
          })
        )}
      </div>
      <div id="recent-expense">
        <h4>Recent</h4>
        {expenses.length === 0 ? (
          <p>No recent expenses</p>
        ) : (
          expenses.map((item) => {
            return (
              <div className="recent-item" key={item.id}>
                <p>{item.description}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <b>${Math.abs(item.amount)}</b>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
