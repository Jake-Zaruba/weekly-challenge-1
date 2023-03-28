import { BrowserRouter, Routes, Route } from "react-router-dom";
import Balance from "./components/Balance";
import Deposits from "./components/Deposits";

function Whiteboard() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Dashboard}>
          <Route
            index
            path="balance"
            element={
              <Balance
                getTotal={getTotal}
                total={total}
                totalExpenses={totalExpenses}
                totalDeposits={totalDeposits}
                deposits={deposits}
                expenses={expenses}
                funPercentage={percentage.funPercentage}
                billsPercentage={percentage.billsPercentage}
                foodPercentage={percentage.foodPercentage}
                transportationPercentage={percentage.transportationPercentage}
                funSum={funSum}
                billsSum={billsSum}
                foodSum={foodSum}
                transportationSum={transportationSum}
                btnClicked={btnClicked}
              />
            }
          />
          <Route
            path="deposits"
            element={
              <Deposits
                addDeposit={addDeposit}
                deposit={deposit}
                setDeposit={setDeposit}
                description={depositDescription}
                setDescription={setDepositDescription}
              />
            }
          />
          <Route
            path="expenses"
            element={
              <Expenses
                addExpense={addExpense}
                expense={expense}
                setExpense={setExpense}
                description={expenseDescription}
                setDescription={setExpenseDescription}
                category={category}
                assignCategory={assignCateogry}
                setCategory={setCategory}
                setBtnClicked={setBtnClicked}
                btnClicked={btnClicked}
                btn1={btn1}
                btn2={btn2}
                btn3={btn3}
                btn4={btn4}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
