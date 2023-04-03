import NewExpense from "./NewExpense";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import { useEffect } from "react";

export default function Expenses({
  addExpense,
  expense,
  setExpense,
  expenses,
  totalExpenses,
  description,
  setDescription,
  category,
  assignCategory,
  setCategory,
  setBtnClicked,
  btnClicked,
  btn1,
  btn2,
  btn3,
  btn4,
  total,
  funPercentage,
  billsPercentage,
  foodPercentage,
  transportationPercentage,
  monthExpSum,
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
  return (
    <>
      <div className="new-expense-container">
        <NewExpense
          addExpense={addExpense}
          expense={expense}
          setExpense={setExpense}
          expenses={expenses}
          totalExpenses={totalExpenses}
          description={description}
          setDescription={setDescription}
          category={category}
          assignCategory={assignCategory}
          setCategory={setCategory}
          setBtnClicked={setBtnClicked}
          btnClicked={btnClicked}
          btn1={btn1}
          btn2={btn2}
          btn3={btn3}
          btn4={btn4}
          total={total}
          funPercentage={funPercentage}
          billsPercentage={billsPercentage}
          foodPercentage={foodPercentage}
          transportationPercentage={transportationPercentage}
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
          {...monthExpSum}
          total={totalExpenses}
        />
      </div>
    </>
  );
}
