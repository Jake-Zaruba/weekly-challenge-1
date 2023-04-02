import Bar from "./Bar";

export default function BarChart(
  monthExpSum,
  totalExpenses,
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
  dec
) {
  function checkPercent() {
    console.log(monthExpSum.apr);
  }
  return (
    <>
      <button onClick={() => checkPercent()}></button>
      <div className="bar-graph-container">
        <div className="month-container">
          <Bar jan={jan} totalExpenses={totalExpenses} />
          <h2 className="jan-bar">{monthExpSum.jan}</h2>
          <span>Jan</span>
        </div>
        <div className="month-container">
          <Bar feb={feb} totalExpenses={totalExpenses} />
          <h2 className="feb-bar">{monthExpSum.feb}</h2>
          <span>Feb</span>
        </div>
        <div className="month-container">
          <Bar mar={mar} totalExpenses={totalExpenses} />
          <h2 className="mar-bar">{monthExpSum.mar}</h2>
          <span>Mar</span>
        </div>
        <div className="month-container">
          <Bar apr={monthExpSum.apr} totalExpenses={totalExpenses} />
          <h2 className="apr-bar">{monthExpSum.apr}</h2>
          <span>Apr</span>
        </div>
        <div className="month-container">
          <Bar />
          <h2 className="may-bar">{monthExpSum.may}</h2>
          <span>May</span>
        </div>
        <div className="month-container">
          <Bar />
          <h2 className="jun-bar">{monthExpSum.jun}</h2>
          <span>Jun</span>
        </div>
        <div className="month-container">
          <Bar />
          <h2 className="jul-bar">{monthExpSum.jul}</h2>
          <span>Jul</span>
        </div>
        <div className="month-container">
          <Bar />
          <h2 className="aug-bar">{monthExpSum.aug}</h2>
          <span>Aug</span>
        </div>
        <div className="month-container">
          <Bar />
          <h2 className="sep-bar">{monthExpSum.sep}</h2>
          <span>Sep</span>
        </div>
        <div className="month-container">
          <Bar />
          <h2 className="oct-bar">{monthExpSum.oct}</h2>
          <span>Oct</span>
        </div>
        <div className="month-container">
          <Bar />
          <h2 className="nov-bar">{monthExpSum.nov}</h2>
          <span>Nov</span>
        </div>
        <div className="month-container">
          <Bar />
          <h2 className="dec-bar">{monthExpSum.dec}</h2>
          <span>Dec</span>
        </div>
      </div>
    </>
  );
}
