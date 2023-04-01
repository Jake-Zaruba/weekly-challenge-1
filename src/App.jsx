import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deposits from "./components/Deposits";
import NewExpense from "./components/NewExpense";
import Balance from "./components/Balance";
import Layout from "./Layout";

function App() {
  //DEPOSIT STATE
  const [deposit, setDeposit] = useState("");
  const [deposits, setDeposits] = useState([]);
  const [depositDescription, setDepositDescription] = useState("");
  //EXPENSE STATE
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
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
  const [monthExpSum, setMonthExpSum] = useState({
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dec: 0,
  });
  // const [marExpSum, setMarExpSum] = useState(0);
  //ADD DEPOSITS

  function addDeposit() {
    if (!deposit) {
      return alert("Add a deposit");
    } else if (!depositDescription) {
      return alert("Add a description");
    }
    const date = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const depositInfo = {
      id: Math.floor(Math.random() * 10000),
      amount: deposit,
      description: depositDescription,
      date: date,
    };
    setDeposits((prev) => [...prev, depositInfo]);
    getTotal();
    console.log(deposits);
    setDepositDescription("");
    setDeposit("");
    // const test = expenses.filter((item) => {
    //   if (item.date.split(" ")[1] === "Mar") {
    //     return item.amount;
    //   } else {
    //     return "oops";
    //   }
    // });
    console.log(expenses[0].date.split(" ")[1]);
  }

  //ADD EXPENSES

  function addExpense() {
    if (!expense) {
      return alert("Add an expense");
    } else if (!expenseDescription) {
      return alert("Add a description");
    }
    const date = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const expenseInfo = {
      id: Math.floor(Math.random() * 10000),
      amount: expense,
      description: expenseDescription,
      date: date,
      category: category,
    };
    setExpenses((prev) => [...prev, expenseInfo]);
    getTotal();
    setBtnClicked(true);
    setExpenseDescription("");
    setExpense("");
    expenses.filter((item) => {
      if (
        item.date.split(" ")[1] === "Jan" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, jan: prev.jan + item.amount });
      } else if (
        item.date.split(" ")[1] === "Feb" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, feb: monthExpSum.feb + item.amount });
      } else if (
        item.date.split(" ")[1] === "Mar" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, mar: monthExpSum.mar + item.amount });
      } else if (
        item.date.split(" ")[1] === "Apr" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, apr: monthExpSum.apr + item.amount });
      } else if (
        item.date.split(" ")[1] === "May" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, may: monthExpSum.may + item.amount });
      } else if (
        item.date.split(" ")[1] === "Jun" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, jun: monthExpSum.jun + item.amount });
      } else if (
        item.date.split(" ")[1] === "Jul" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, jul: monthExpSum.jul + item.amount });
      } else if (
        item.date.split(" ")[1] === "Aug" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, aug: monthExpSum.aug + item.amount });
      } else if (
        item.date.split(" ")[1] === "Sep" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, sep: monthExpSum.sep + item.amount });
      } else if (
        item.date.split(" ")[1] === "Oct" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, oct: monthExpSum.oct + item.amount });
      } else if (
        item.date.split(" ")[1] === "Nov" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, nov: monthExpSum.nov + item.amount });
      } else if (
        item.date.split(" ")[1] === "Dec" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({ ...monthExpSum, dec: monthExpSum.dec + item.amount });
      }
    });
    console.log(monthExpSum.mar);
  }

  //GET TOTAL BALANCES

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
    const roundedPercentage = (expenseValue / totalValue).toFixed(5);
    return roundedPercentage;
  }

  //ASSIGN CATEGORIES TO EXPENSES

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
      if (
        item.category === "Fun" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setFunSum((prev) => prev + Math.abs(item.amount));
      } else if (
        item.category === "Bills" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setBillsSum((prev) => prev + Math.abs(item.amount));
      } else if (
        item.category === "Food" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setFoodSum((prev) => prev + Math.abs(item.amount));
      } else if (
        item.category === "Transportation" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setTransportationSum((prev) => prev + Math.abs(item.amount));
      }
    });
    setBtnClicked((prev) => {
      btnClicked: !prev;
    });
  }
  function updatePercentages() {
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
    const newDateObj = {
      jan: getPercentage(),
    };
  }

  useEffect(() => {
    updatePercentages();
  }, [expenses]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
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
                deposits={deposits}
                description={depositDescription}
                setDescription={setDepositDescription}
              />
            }
          />
          <Route
            path="expenses"
            element={
              <NewExpense
                addExpense={addExpense}
                expense={expense}
                setExpense={setExpense}
                expenses={expenses}
                totalExpenses={totalExpenses}
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
                total={total}
                funPercentage={percentage.funPercentage}
                billsPercentage={percentage.billsPercentage}
                foodPercentage={percentage.foodPercentage}
                transportationPercentage={percentage.transportationPercentage}
                {...monthExpSum}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
