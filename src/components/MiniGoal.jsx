export default function Goal({
  goals,
  goal1Progress,
  goal2Progress,
  goal3Progress,
}) {
  const goal1Angle = ((goal1Progress / 100) * 360).toFixed();
  const goal2Angle = ((goal2Progress / 100) * 360).toFixed();
  const goal3Angle = ((goal3Progress / 100) * 360).toFixed();

  return (
    <>
      <div className="goals" style={{ width: "75%" }}>
        {goals[0] && (
          <div className="goal-container">
            <div>
              <h2>{goals[0].goalName}</h2>
              <p>${goals[0].goalAmount.toLocaleString("en-US")}</p>
              <div
                style={{
                  backgroundImage: `conic-gradient(#213547 0deg ${goal1Angle}deg, #abc4aa ${goal1Angle}deg)`,
                  marginTop: "2rem",
                }}
                className="goal-progress-bar"
              >
                <div className="goal-progress-text">{goal1Progress}%</div>
              </div>
            </div>
          </div>
        )}
        {goals[1] && (
          <div className="goal-container">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>{goals[1].goalName}</h2>
              <p>${goals[1].goalAmount.toLocaleString("en-US")}</p>
              <div
                style={{
                  backgroundImage: `conic-gradient(#213547 0deg ${goal2Angle}deg, #abc4aa ${goal2Angle}deg)`,
                  marginTop: "2rem",
                }}
                className="goal-progress-bar"
              >
                <div className="goal-progress-text">{goal2Progress}%</div>
              </div>
            </div>
          </div>
        )}
        {goals[2] && (
          <div className="goal-container">
            <div>
              <h2>{goals[2].goalName}</h2>
              <p>${goals[2].goalAmount.toLocaleString("en-US")}</p>
            </div>
            <div
              style={{
                backgroundImage: `conic-gradient(#213547 0deg ${goal3Angle}deg, #abc4aa ${goal3Angle}deg)`,
                marginTop: "2rem",
              }}
              className="goal-progress-bar"
            >
              <div className="goal-progress-text">{goal3Progress}%</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
