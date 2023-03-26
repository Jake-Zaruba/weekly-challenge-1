import React, { useState } from "react";

export default function PieChart({
  percentage,
  totalExpenses,
  totalDeposits,
  total,
  expenses,
  funPercentage,
  billsPercentage,
  foodPercentage,
  transportationPercentage,
  transportationSum,
}) {
  // const funAngle = 45;
  // const billsAngle = 90;
  // const foodAngle = 180;
  // const transportationAngle = 45;

  const funAngle = (funPercentage * 360).toFixed();
  const billsAngle = (billsPercentage * 360).toFixed();
  const foodAngle = (foodPercentage * 360).toFixed();
  const transportationAngle = (transportationPercentage * 360).toFixed();

  const angleArr = [
    funAngle,
    billsAngle,
    foodAngle,
    transportationAngle,
  ].sort();

  const [a, b, c, d] = angleArr;

  function showDegrees() {
    console.log(funAngle, billsAngle, foodAngle, transportationAngle);
  }

  function showPercent() {
    console.log(
      funPercentage,
      billsPercentage,
      foodPercentage,
      transportationPercentage
    );
  }

  // console.log(funExpenses);

  return (
    <>
      <button
        onClick={() =>
          // console.log(
          //   funPercentage,
          //   billsPercentage,
          //   foodPercentage,
          //   transportationPercentage
          // )
          showPercent()
        }
      >
        hi
      </button>
      <div
        style={{
          height: "15rem",
          width: "15rem",
          borderRadius: "50%",
          transition: "all 0.3s",
          backgroundImage: `conic-gradient(#698269 0deg ${a}deg, #B99B6B ${a}deg ${
            a + b
          }deg, #F1DBBF ${a + b}deg ${a + b + c}deg, #AA5656 ${
            a + b + c
          }deg 360deg)`,
          // background: `conic-gradient(orange ${funSum}%, blue ${funSum}% ${billsSum}%, red ${billsSum}% ${foodSum}%, green ${foodSum}% ${transportationSum}%`,
        }}
        className="pie-chart"
      ></div>
    </>
  );
}
