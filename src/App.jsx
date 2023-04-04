import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deposits from "./components/Deposits";
import Balance from "./components/Balance";
import Layout from "./Layout";
import Expenses from "./components/Expenses";
import Goals from "./components/Goals";

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
  const [goal, setGoal] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  const [funSum, setFunSum] = useState(0);
  const [billsSum, setBillsSum] = useState(0);
  const [foodSum, setFoodSum] = useState(0);
  const [transportationSum, setTransportationSum] = useState(0);
  const [goal1Sum, setGoal1Sum] = useState(0);
  const [goal2Sum, setGoal2Sum] = useState(0);
  const [goal3Sum, setGoal3Sum] = useState(0);
  const [goal4Sum, setGoal4Sum] = useState(0);
  const [percentage, setPercentage] = useState({
    funPercentage: 0,
    billsPercentage: 0,
    foodPercentage: 0,
    transportationPercentage: 0,
  });
  const [goalPercentage, setGoalPercentage] = useState({
    goal1Percentage: 0,
    goal2Percentage: 0,
    goal3Percentage: 0,
    goal4Percentage: 0,
  });
  const [monthDepSum, setMonthDepSum] = useState({
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
      goal: goal,
    };
    setDeposits((prev) => [...prev, depositInfo]);
    getTotal();
    setBtnClicked(true);
    setDepositDescription("");
    setDeposit("");
    console.log(deposits);
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
  }

  function updateMonthDeposits() {
    deposits.filter((item) => {
      if (
        item.date.split(" ")[1] === "Jan" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          jan: Math.abs(prev.jan) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Feb" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          feb: Math.abs(monthDepSum.feb) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Mar" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          mar: Math.abs(monthDepSum.mar) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Apr" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          apr: Math.abs(monthDepSum.apr) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "May" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          may: Math.abs(monthDepSum.may) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Jun" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          jun: Math.abs(monthDepSum.jun) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Jul" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          jul: Math.abs(monthDepSum.jul) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Aug" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          aug: Math.abs(monthDepSum.au) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Sep" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          sep: Math.abs(monthDepSum.sep) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Oct" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          oct: Math.abs(monthDepSum.oct) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Nov" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          nov: Math.abs(monthDepSum.nov) + Math.abs(item.amoun),
        });
      } else if (
        item.date.split(" ")[1] === "Dec" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setMonthDepSum({
          ...monthDepSum,
          dec: Math.abs(monthDepSum.dec) + Math.abs(item.amount),
        });
      }
    });
  }

  function updateMonthExpenses() {
    expenses.filter((item) => {
      if (
        item.date.split(" ")[1] === "Jan" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          jan: Math.abs(prev.jan) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Feb" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          feb: Math.abs(monthExpSum.feb) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Mar" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          mar: Math.abs(monthExpSum.mar) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Apr" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          apr: Math.abs(monthExpSum.apr) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "May" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          may: Math.abs(monthExpSum.may) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Jun" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          jun: Math.abs(monthExpSum.jun) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Jul" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          jul: Math.abs(monthExpSum.jul) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Aug" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          aug: Math.abs(monthExpSum.au) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Sep" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          sep: Math.abs(monthExpSum.sep) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Oct" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          oct: Math.abs(monthExpSum.oct) + Math.abs(item.amount),
        });
      } else if (
        item.date.split(" ")[1] === "Nov" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          nov: Math.abs(monthExpSum.nov) + Math.abs(item.amoun),
        });
      } else if (
        item.date.split(" ")[1] === "Dec" &&
        item.id === expenses[expenses.length - 1].id
      ) {
        setMonthExpSum({
          ...monthExpSum,
          dec: Math.abs(monthExpSum.dec) + Math.abs(item.amount),
        });
      }
    });
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

  //ASSIGN GOALS TO DEPOSITS

  const goal1 = "Goal 1";
  const goal2 = "Goal 2";
  const goal3 = "Goal 3";
  const goal4 = "None";

  function assignGoal(button) {
    const addGoal = deposits.map((item) => {
      if (item.goal === "") {
        return { ...item, goal: button };
      } else {
        return item;
      }
    });
    setDeposits(addGoal);
    addGoal.filter((item) => {
      if (
        item.goal === "Goal 1" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setGoal1Sum((prev) => prev + Math.abs(item.amount));
      } else if (
        item.goal === "Goal 2" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setGoal2Sum((prev) => prev + Math.abs(item.amount));
      } else if (
        item.goal === "Goal 3" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setGoal3Sum((prev) => prev + Math.abs(item.amount));
      } else if (
        item.goal === "None" &&
        item.id === deposits[deposits.length - 1].id
      ) {
        setGoal4Sum((prev) => prev + Math.abs(item.amount));
      }
    });
    setBtnClicked((prev) => {
      console.log(goal1Sum);
      btnClicked: !prev;
    });
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
  }

  function updateGoals() {
    const newObj = {
      goal1Percentage: getPercentage(goal1Sum, Math.abs(totalDeposits)),
      goal2Percentage: getPercentage(goal2Sum, Math.abs(totalDeposits)),
      goal3Percentage: getPercentage(goal3Sum, Math.abs(totalDeposits)),
      goal4Percentage: getPercentage(goal4Sum, Math.abs(totalDeposits)),
    };
    setGoalPercentage((prev) => ({ ...(prev = newObj) }));
  }

  useEffect(() => {
    updatePercentages();
  }, [expenses]);

  useEffect(() => {
    updateGoals();
  }, [deposits]);

  useEffect(() => {
    updateMonthExpenses();
  }, [expenses.length]);

  useEffect(() => {
    updateMonthDeposits();
  }, [deposits.length]);

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
                totalDeposits={totalDeposits}
                description={depositDescription}
                setDescription={setDepositDescription}
                goal1Percentage={goalPercentage.goal1Percentage}
                goal2Percentage={goalPercentage.goal2Percentage}
                goal3Percentage={goalPercentage.goal3Percentage}
                goal4Percentage={goalPercentage.goal4Percentage}
                btnClicked={btnClicked}
                goal={goal}
                assignGoal={assignGoal}
                goal1={goal1}
                goal2={goal2}
                goal3={goal3}
                goal4={goal4}
                goal1Sum={goal1Sum}
                goal2Sum={goal2Sum}
                goal3Sum={goal3Sum}
                goal4Sum={goal4Sum}
                {...monthDepSum}
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
                expenses={expenses}
                totalExpenses={totalExpenses}
                description={expenseDescription}
                setDescription={setExpenseDescription}
                category={category}
                assignCategory={assignCateogry}
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
          <Route path="goals" element={<Goals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
