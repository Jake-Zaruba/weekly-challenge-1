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
  assignGoal,
  goal1,
  goal2,
  goal3,
  goal4,
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
  goal,
  goals,
  goal1Percentage,
  goal2Percentage,
  goal3Percentage,
  goal4Percentage,
}) {
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
          goal={goal}
          goals={goals}
          assignGoal={assignGoal}
          goal1={goal1}
          goal2={goal2}
          goal3={goal3}
          goal4={goal4}
          btnClicked={btnClicked}
        />
        <div className="pie-chart-container">
          <PieChart
            value1={goal1Percentage}
            value2={goal2Percentage}
            value3={goal3Percentage}
            value4={goal4Percentage}
            btnClicked={btnClicked}
          />
          <div className="legend">
            {goals[0] && <div className="legend-icon"></div>}
            {goals[0] && <span>{goals[0]?.goalName}</span>}
            {goals[1] && <div className="legend-icon"></div>}
            {goals[1] && <span>{goals[1]?.goalName}</span>}
            {goals[2] && <div className="legend-icon"></div>}
            {goals[2] && <span>{goals[2]?.goalName}</span>}
            {totalDeposits > 0 && <div className="legend-icon"></div>}
            {totalDeposits > 0 && <span>None</span>}
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
      </div>
    </>
  );
}
