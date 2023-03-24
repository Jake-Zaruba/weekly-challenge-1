import React from "react";

export default function Balance({
  getTotal,
  total,
  totalExpenses,
  totalDeposits,
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
        Expenses <br /> <strong>${totalExpenses}</strong>
      </span>
    </div>
  );
}
