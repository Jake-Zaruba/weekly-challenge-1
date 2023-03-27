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
  const funAngle = (funPercentage * 360).toFixed();
  const billsAngle = (billsPercentage * 360).toFixed();
  const foodAngle = (foodPercentage * 360).toFixed();
  const transportationAngle = (transportationPercentage * 360).toFixed();

  const angleArr = [funAngle, billsAngle, foodAngle, transportationAngle];

  const sortedArr = angleArr.sort((num1, num2) => {
    return num1 - num2;
  });

  const [a, b, c, d] = sortedArr;

  function showDegrees() {
    console.log(funAngle, billsAngle, foodAngle, transportationAngle);
  }

  function showSorted() {
    console.log(sortedArr);
    console.log(a, b, c, d);
  }

  // function showPercent() {
  //   console.log(
  //     funPercentage,
  //     billsPercentage,
  //     foodPercentage,
  //     transportationPercentage
  //   );
  // }

  // console.log(funExpenses);

  // const a = 45;
  // const b = 90;
  // const c = 180;
  // const d = 45;

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
          showSorted()
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
          }deg, #F1DBBF ${a + b}deg ${a + b + c}deg, #AA5656 ${a + b + c}deg)`,
          // background: `conic-gradient(orange ${funSum}%, blue ${funSum}% ${billsSum}%, red ${billsSum}% ${foodSum}%, green ${foodSum}% ${transportationSum}%`,
        }}
        className="pie-chart"
      ></div>
    </>
  );
}
