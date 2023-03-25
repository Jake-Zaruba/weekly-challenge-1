import React from "react";

const PieChart = ({ getPercentage, totalExpenses, totalDeposits, total }) => {
  const expensePercentage = getPercentage(
    Math.abs(totalExpenses),
    total
  ).toFixed(2);

  console.log(expensePercentage);

  return <h1>Hi</h1>;
};

export default PieChart;
