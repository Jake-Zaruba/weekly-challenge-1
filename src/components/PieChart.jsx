import React, { useState } from "react";

export default function PieChart({
  getPercentage,
  totalExpenses,
  totalDeposits,
  total,
  expenses,
  funSum,
  billsSum,
  foodSum,
  transportationSum,
}) {
  const funPercentage =
    getPercentage(funSum, Math.abs(totalExpenses)).toFixed(2) * 100;

  const billsPercentage =
    getPercentage(billsSum, Math.abs(totalExpenses)).toFixed(2) * 100;

  const foodPercentage =
    getPercentage(foodSum, Math.abs(totalExpenses)).toFixed(2) * 100;

  const transportationPercentage =
    getPercentage(transportationSum, Math.abs(totalExpenses)).toFixed(2) * 100;

  const funAngle = ((funPercentage / 100) * 360).toFixed();
  const billsAngle = ((billsPercentage / 100) * 360).toFixed();
  const foodAngle = ((foodPercentage / 100) * 360).toFixed();
  const transportationAngle = (
    (transportationPercentage / 100) *
    360
  ).toFixed();

  function showDegrees() {
    console.log(funAngle, billsAngle, foodAngle, transportationAngle);
  }

  // console.log(funExpenses);

  return (
    <>
      {/* <button
        onClick={() =>
          console.log(
            funPercentage,
            billsPercentage,
            foodPercentage,
            transportationPercentage
          )
        }
      >
        hi
      </button> */}
      <div
        style={{
          height: "15rem",
          width: "15rem",
          borderRadius: "50%",
          transition: "all 0.3s",
          backgroundImage: `conic-gradient(#698269 ${funAngle}deg, #B99B6B ${funAngle}deg ${billsAngle}deg, #F1DBBF ${billsAngle}deg ${foodAngle}deg, #AA5656 ${foodAngle}deg 360deg)`,
          // background: `conic-gradient(orange ${funSum}%, blue ${funSum}% ${billsSum}%, red ${billsSum}% ${foodSum}%, green ${foodSum}% ${transportationSum}%`,
        }}
        className="pie-chart"
      ></div>
    </>
  );
}
