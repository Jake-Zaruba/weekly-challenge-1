export default function Goal({ goal1Progress, goal2Progress, goal3Progress }) {
  const goal1Angle = ((goal1Progress / 100) * 360).toFixed();
  const goal2Angle = ((goal2Progress / 100) * 360).toFixed();
  const goal3Angle = ((goal3Progress / 100) * 360).toFixed();

  return (
    <>
      <div
        style={{
          backgroundImage: `conic-gradient(#213547 0deg ${goal1Angle}deg, #abc4aa ${goal1Angle}deg)`,
        }}
        className="goal-container"
      >
        <div className="goal-progress-text">{goal1Progress}%</div>
      </div>
    </>
  );
}
