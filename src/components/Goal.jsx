export default function Goal({ goal1Progress, goal2Progress, goal3Progress }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `conic-gradient(blue 0% ${goal1Progress}%, red ${goal1Progress} 100%)`,
        }}
        className="goal-container"
      ></div>
    </>
  );
}
