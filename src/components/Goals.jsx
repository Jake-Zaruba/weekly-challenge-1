import { useState } from "react";
import Goal from "./Goal";

export default function Goals({
  goals,
  setGoals,
  goal1Sum,
  goal2Sum,
  goal3Sum,
  goal4Sum,
  getPercentage,
}) {
  const [modal, setModal] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState(0);

  function toggleModal() {
    if (goals.length > 2) {
      alert("Please reomve or complete a goal to add a new goal.");
    } else setModal((prev) => !prev);
  }

  function addGoal() {
    const goalInfo = {
      id: Math.floor(Math.random() * 1000),
      goalName: goalName,
      goalAmount: parseInt(goalAmount),
      goalCurrentAmount: 0,
    };
    setGoals((prev) => [...prev, goalInfo]);
    setGoalName("");
    setGoalAmount(0);
    toggleModal();
    console.log(goal1Progress);
  }

  const goal1Progress = parseFloat(
    getPercentage(goal1Sum, goals[0]?.goalAmount) * 100
  );
  const goal2Progress = parseFloat(
    getPercentage(goal2Sum, goals[1]?.goalAmount) * 100
  );
  const goal3Progress = parseFloat(
    getPercentage(goal3Sum, goals[2]?.goalAmount) * 100
  );

  return (
    <>
      <div className="goals-page-container">
        <button className="add-goal-btn" onClick={() => toggleModal()}>
          Add goal
        </button>
        {modal && (
          <div className="goal-modal">
            <div className="goal-modal-overlay"></div>
            <div className="goal-modal-form">
              <button className="close-modal-btn" onClick={() => toggleModal()}>
                X
              </button>
              <input
                type="text"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                placeholder="Goal Name"
              />
              <input
                type="number"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
                placeholder="$0"
              />
              <button onClick={() => addGoal()}>Add Goal</button>
            </div>
          </div>
        )}
        <Goal
          goals={goals}
          goal1Progress={goal1Progress}
          goal2Progress={goal2Progress}
          goal3Progress={goal3Progress}
          goal1Sum={goal1Sum}
          goal2Sum={goal2Sum}
          goal3Sum={goal3Sum}
        />
      </div>
    </>
  );
}
