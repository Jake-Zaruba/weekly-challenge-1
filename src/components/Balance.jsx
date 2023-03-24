import React from "react";

export default function Balance({
  getTotal,
  total,
  totalExpenses,
  totalDeposits,
}) {
  return (
    <div className="balance-container">
      <h1>${total}</h1>
      {/* <button onClick={() => getTotal()}>Get total</button> */}
      {/* <h2>{totalDeposits}</h2> */}
      <h2>{totalExpenses}</h2>
      <h2>{totalDeposits}</h2>
    </div>
  );
}
