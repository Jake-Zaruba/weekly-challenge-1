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
      <h1 className="total">${total}</h1>
      {/* <button onClick={() => getTotal()}>Get total</button> */}
      {/* <h2>{totalDeposits}</h2> */}
      <span className="total-deposits">
        Income <br />
        <strong>${totalDeposits}</strong>
      </span>
      <span className="total-expenses">
        Expenses <br /> <strong>${Math.abs(totalExpenses)}</strong>
      </span>
      <div id="recent-deposit">
        <h3>Recent</h3>
        {deposits.map((item) => {
          return <p key={item.id}>{item.description}</p>;
        })}
      </div>
      <div id="recent-expense">
        <h3>Recent</h3>
        {expenses.map((item) => {
          return <p key={item.id}>{item.description}</p>;
        })}
      </div>
    </div>
  );
}
