import { useEffect, useState } from "react";
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
  const [percentage, setPercentage] = useState({
    funPercentage: 0,
    billsPercentage: 0,
    foodPercentage: 0,
    transportationPercentage: 0,
  });

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
    const roundedPercentage = (expenseValue / totalValue).toFixed(2);
    return roundedPercentage;
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
        console.log(Math.abs(item.amount));
        console.log(addCategory);
      } else if (item.category === "Bills") {
        setBillsSum((prev) => prev + Math.abs(item.amount));
      } else if (item.category === "Food") {
        setFoodSum((prev) => prev + Math.abs(item.amount));
      } else if (item.category === "Transportation") {
        setTransportationSum((prev) => prev + Math.abs(item.amount));
      }
    });

    setBtnClicked((prev) => {
      btnClicked: !prev;
    });
  }
  function doThing() {
    const newObj = {
      funPercentage: getPercentage(funSum, Math.abs(totalExpenses)),
      billsPercentage: getPercentage(billsSum, Math.abs(totalExpenses)),
      foodPercentage: getPercentage(foodSum, Math.abs(totalExpenses)),
      transportationPercentage: getPercentage(
        transportationSum,
        Math.abs(totalExpenses)
      ),
    };
    setPercentage((prev) => ({ ...(prev = newObj) }));
  }

  useEffect(() => {
    doThing();
  }, [expenses]);

  return (
    <div className="App">
      <h2>{funSum}</h2>
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
        funPercentage={percentage.funPercentage}
        billsPercentage={percentage.billsPercentage}
        foodPercentage={percentage.foodPercentage}
        transportationPercentage={percentage.transportationPercentage}
        funSum={funSum}
        billsSum={billsSum}
        foodSum={foodSum}
        transportationSum={transportationSum}
      />
    </div>
  );
}

export default App;
