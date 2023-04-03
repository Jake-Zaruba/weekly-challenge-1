import BarChart from "./BarChart";
import NewDeposit from "./NewDeposit";
import PieChart from "./PieChart";

export default function Deposits({
  addDeposit,
  deposit,
  setDeposit,
  deposits,
  totalDeposits,
  description,
  setDescription,
  funPercentage,
  billsPercentage,
  foodPercentage,
  transportationPercentage,
  btnClicked,
  monthDepSum,
  jan,
  feb,
  mar,
  apr,
  may,
  jun,
  jul,
  aug,
  sep,
  oct,
  nov,
  dec,
}) {
  function debug() {
    console.log(deposits);
  }
  return (
    <>
      <div className="new-expense-container">
        <NewDeposit
          addDeposit={addDeposit}
          deposit={deposit}
          setDeposit={setDeposit}
          deposits={deposits}
          totalDeposits={totalDeposits}
          description={description}
          setDescription={setDescription}
          funPercentage={funPercentage}
          billsPercentage={billsPercentage}
          foodPercentage={foodPercentage}
          transportationPercentage={transportationPercentage}
          btnClicked={btnClicked}
        />
        <div className="pie-chart-container">
          <PieChart
            funPercentage={funPercentage}
            billsPercentage={billsPercentage}
            foodPercentage={foodPercentage}
            transportationPercentage={transportationPercentage}
            btnClicked={btnClicked}
          />
          <div className="legend">
            <div className="legend-icon"></div>
            <span>Fun</span>
            <div className="legend-icon"></div>
            <span>Bills</span>
            <div className="legend-icon"></div>
            <span>Food</span>
            <div className="legend-icon"></div>
            <span>Transporation</span>
          </div>
        </div>
        <BarChart
          jan={jan}
          feb={feb}
          mar={mar}
          apr={apr}
          may={may}
          jun={jun}
          jul={jul}
          aug={aug}
          sep={sep}
          oct={oct}
          nov={nov}
          dec={dec}
          {...monthDepSum}
          total={totalDeposits}
        />

        {/* <button onClick={() => debug()}></button> */}
      </div>
    </>
  );
}
