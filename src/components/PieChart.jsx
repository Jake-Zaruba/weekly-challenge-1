import React, { useState } from "react";

export default function PieChart({
  funPercentage,
  billsPercentage,
  foodPercentage,
  transportationPercentage,
  btnClicked,
}) {
  const funAngle = parseInt((funPercentage * 360).toFixed());
  const billsAngle = parseInt((billsPercentage * 360).toFixed());
  const foodAngle = parseInt((foodPercentage * 360).toFixed());
  const transportationAngle = parseInt(
    (transportationPercentage * 360).toFixed()
  );

  const angleArr = [funAngle, billsAngle, foodAngle, transportationAngle];

  const sortedArr = angleArr.sort((num1, num2) => {
    return num1 - num2;
  });

  const [a, b, c, d] = angleArr;

  return (
    <>
      {/* <button onClick={() => showSorted()}>hi</button> */}
      <div
        style={{
          height: "15rem",
          width: "15rem",
          borderRadius: "50%",
          transition: "all 0.3s",
          backgroundImage: `conic-gradient(#698269 0deg ${a}deg, #B99B6B ${a}deg ${
            a + b
          }deg, #F1DBBF ${a + b}deg ${a + b + c}deg, #${
            d === 0 ? "f1dbbf5c" : "AA5656"
          } ${a + b + c}deg ${a + b + c + d}deg)`,
        }}
        className={!btnClicked ? "pie-chart pie-chart-animation" : "pie-chart"}
      ></div>
    </>
  );
}
