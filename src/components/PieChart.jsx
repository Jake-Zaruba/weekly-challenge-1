export default function PieChart({
  value1,
  value2,
  value3,
  value4,
  btnClicked,
}) {
  const angle1 = parseInt((value1 * 360).toFixed());
  const angle2 = parseInt((value2 * 360).toFixed());
  const angle3 = parseInt((value3 * 360).toFixed());
  const angle4 = parseInt((value4 * 360).toFixed());

  const angleArr = [angle1, angle2, angle3, angle4];

  // const sortedArr = angleArr.sort((num1, num2) => {
  //   return num1 - num2;
  // });

  const [a, b, c, d] = angleArr;

  return (
    <>
      <div
        style={{
          height: "15rem",
          width: "15rem",
          borderRadius: "50%",
          transition: "all 0.3s",
          backgroundImage: `conic-gradient(#698269 0deg ${a}deg, #B99B6B ${a}deg ${
            a + b
          }deg, #F1DBBF ${a + b}deg ${a + b + c}deg, #${
            d === 0 ? "f1dbbf5e" : "AA5656"
          } ${a + b + c}deg 360deg)`,
        }}
        className={!btnClicked ? "pie-chart pie-chart-animation" : "pie-chart"}
      ></div>
    </>
  );
}
