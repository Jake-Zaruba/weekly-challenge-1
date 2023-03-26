import { useState } from "react";
import Deposits from "./components/Deposits";
import NewExpense from "./components/NewExpense";
import Balance from "./components/Balance";

function App() {
  const [deposit, setDeposit] = useState("");
  const [deposits, setDeposits] = useState([]);
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [depositDescription, setDepositDescription] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);
  const [funSum, setFunSum] = useState(0);
  const [billsSum, setBillsSum] = useState(0);
  const [foodSum, setFoodSum] = useState(0);
  const [transportationSum, setTransportationSum] = useState(0);

  function addDeposit() {
    if (!deposit) {
      return alert("Add a deposit");
    } else if (!depositDescription) {
      return alert("Add a description");
    }
    const depositInfo = {
      id: Math.floor(Math.random() * 10000),
      amount: deposit,
      description: depositDescription,
    };
    setDeposits((prev) => [...prev, depositInfo]);
    getTotal();
    setDepositDescription("");
    setDeposit("");
  }

  function addExpense() {
    if (!expense) {
      return alert("Add an expense");
    } else if (!expenseDescription) {
      return alert("Add a description");
    }
    const expenseInfo = {
      id: Math.floor(Math.random() * 10000),
      amount: expense,
      description: expenseDescription,
      category: category,
    };
    setExpenses((prev) => [...prev, expenseInfo]);
    getTotal();
    setBtnClicked(true);
    setExpenseDescription("");
    setExpense("");
  }

  function getTotal() {
    setTotal((prev) => prev + deposit - expense * -1);
  }

  const totalExpenses = expenses.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  const totalDeposits = deposits.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  function getPercentage(expenseValue, totalValue) {
    return expenseValue / totalValue;
  }

  const btn1 = "Fun";
  const btn2 = "Bills";
  const btn3 = "Food";
  const btn4 = "Transportation";

  //MUST MAKE ALERT WHEN NAVIGATING TO OTHER AREA OF SITE - FORCE USER TO ADD CATEGORY

  function assignCateogry(button) {
    const addCategory = expenses.map((item) => {
      if (item.category === "") {
        return { ...item, category: button };
      } else {
        return item;
      }
    });
    setExpenses(addCategory);
    addCategory.filter((item) => {
      if (item.category === "Fun") {
        setFunSum((prev) => prev + Math.abs(item.amount));
      } else if (item.category === "Bills") {
        setBillsSum((prev) => prev + Math.abs(item.amount));
      } else if (item.category === "Food") {
        setFoodSum((prev) => prev + Math.abs(item.amount));
      } else if (item.category === "Transportation") {
        setTransportationSum((prev) => prev + Math.abs(item.amount));
      }
    });
    console.log(totalExpenses);
    setBtnClicked((prev) => {
      btnClicked: !prev;
    });
  }

  return (
    <div className="App">
      <div className="expense-deposit-container">
        <Deposits
          addDeposit={addDeposit}
          deposit={deposit}
          setDeposit={setDeposit}
          description={depositDescription}
          setDescription={setDepositDescription}
        />
        <NewExpense
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
      </div>
      <Balance
        getTotal={getTotal}
        total={total}
        totalExpenses={totalExpenses}
        totalDeposits={totalDeposits}
        deposits={deposits}
        expenses={expenses}
        getPercentage={getPercentage}
        funSum={funSum}
        billsSum={billsSum}
        foodSum={foodSum}
        transportationSum={transportationSum}
      />
    </div>
  );
}

export default App;
