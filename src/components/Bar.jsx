export default function Bar(totalExpenses, jan, feb, mar, apr, month) {
  function getPercentage(value, totalValue) {
    const roundedPercentage = (value / totalValue).toFixed(5);
    return roundedPercentage * 100;
  }
  const percentage = getPercentage(
    Math.abs(totalExpenses.month),
    Math.abs(totalExpenses.totalExpenses)
  );

  const style = {
    backgroundColor: "#213547",
    height: `calc(0% + ${percentage}%)`,
    width: "2rem",
    borderRadius: "8px",
    borderTopLeftRadius: "8px",
  };

  // function checkPercent() {
  //   // console.log(apr);
  //   console.log(percentage);
  // }

  return (
    <>
      <div className="bar-container">
        <div
          style={totalExpenses.totalExpenses ? style : null}
          className="bar"
        ></div>
      </div>
    </>
  );
}
