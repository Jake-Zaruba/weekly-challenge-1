export default function Bar(totalExpenses, jan, feb, mar, apr) {
  function getPercentage(value, totalValue) {
    const roundedPercentage = (value / totalValue).toFixed(5);
    return roundedPercentage * 100;
  }
  const percentage = getPercentage(month, totalExpenses);

  const style = {
    backgroundColor: "#213547",
    height: `calc(0% + ${percentage}%)`,
    width: "2rem",
  };

  function checkPercent() {
    console.log(month);
  }

  return (
    <>
      <button onClick={() => checkPercent()}></button>
      <div style={style} className="bar"></div>
    </>
  );
}
