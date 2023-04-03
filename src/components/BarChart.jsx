import Bar from "./Bar";

export default function BarChart({
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
  total,
}) {
  // function checkPercent() {
  //   console.log(apr);
  //   console.log(totalExpenses);
  // }
  return (
    <>
      <div className="bar-graph-container">
        <div className="month-container">
          <Bar month={jan} total={total} />
          <h2 className="jan-bar">
            <span className="dollar-sign">&#36;</span>
            {jan}&nbsp;
          </h2>
          <span>Jan</span>
        </div>
        <div className="month-container">
          <Bar month={feb} total={total} />
          <h2 className="feb-bar">
            <span className="dollar-sign">&#36;</span>
            {feb}&nbsp;
          </h2>
          <span>Feb</span>
        </div>
        <div className="month-container">
          <Bar month={mar} total={total} />
          <h2 className="mar-bar">
            <span className="dollar-sign">&#36;</span>
            {mar}&nbsp;
          </h2>
          <span>Mar</span>
        </div>
        <div className="month-container">
          <Bar month={apr} total={total} />
          <h2 className="apr-bar">
            <span className="dollar-sign">&#36;</span>
            {apr}&nbsp;
          </h2>
          <span>Apr</span>
        </div>
        <div className="month-container">
          <Bar month={may} total={total} />
          <h2 className="may-bar">
            <span className="dollar-sign">&#36;</span>
            {may}&nbsp;
          </h2>
          <span>May</span>
        </div>
        <div className="month-container">
          <Bar month={jun} total={total} />
          <h2 className="jun-bar">
            <span className="dollar-sign">&#36;</span>
            {jun}&nbsp;
          </h2>
          <span>Jun</span>
        </div>
        <div className="month-container">
          <Bar month={jul} total={total} />
          <h2 className="jul-bar">
            <span className="dollar-sign">&#36;</span>
            {jul}&nbsp;
          </h2>
          <span>Jul</span>
        </div>
        <div className="month-container">
          <Bar month={aug} total={total} />
          <h2 className="aug-bar">
            <span className="dollar-sign">&#36;</span>
            {aug}&nbsp;
          </h2>
          <span>Aug</span>
        </div>
        <div className="month-container">
          <Bar month={sep} total={total} />
          <h2 className="sep-bar">
            <span className="dollar-sign">&#36;</span>
            {sep}&nbsp;
          </h2>
          <span>Sep</span>
        </div>
        <div className="month-container">
          <Bar month={oct} total={total} />
          <h2 className="oct-bar">
            <span className="dollar-sign">&#36;</span>
            {oct}&nbsp;
          </h2>
          <span>Oct</span>
        </div>
        <div className="month-container">
          <Bar month={nov} total={total} />
          <h2 className="nov-bar">
            <span className="dollar-sign">&#36;</span>
            {nov}&nbsp;
          </h2>
          <span>Nov</span>
        </div>
        <div className="month-container">
          <Bar month={dec} total={total} />
          <h2 className="dec-bar">
            <span className="dollar-sign">&#36;</span>
            {dec}&nbsp;
          </h2>
          <span>Dec</span>
        </div>
      </div>
    </>
  );
}
