import BarChart from "./BarChart";
import NewDeposit from "./NewDeposit";
import PieChart from "./PieChart";

export default function Deposits({
  addDeposit,
  deposit,
  setDeposit,
  deposits,
  description,
  setDescription,
  funPercentage,
  billsPercentage,
  foodPercentage,
  transportationPercentage,
  btnClicked,
}) {
  function debug() {
    console.log(deposits);
  }
  return (
    <>
      <button onClick={() => debug()}></button>
      <div className="new-expense-container">
        <NewDeposit
          addDeposit={addDeposit}
          deposit={deposit}
          setDeposit={setDeposit}
          deposits={deposits}
          description={description}
          setDescription={setDescription}
          funPercentage={funPercentage}
          billsPercentage={billsPercentage}
          foodPercentage={foodPercentage}
          transportationPercentage={transportationPercentage}
          btnClicked={btnClicked}
        />
        <PieChart />
        <BarChart />
      </div>
    </>
  );
}
