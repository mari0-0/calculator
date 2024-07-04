function CalculatorHead({ values }) {

  return (
    <div className="cal-head">
      <div className="head-wrapper">
        <div className="arrows">
          <span className="arrow-up arrow-first"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up"></span>
          <span className="arrow-up arrow-disable"></span>
          <span className="arrow-up arrow-disable"></span>
          <span className="arrow-up arrow-disable"></span>
          <span className="arrow-up arrow-disable"></span>
          <span className="arrow-up arrow-disable"></span>
          <span className="arrow-up arrow-last"></span>
        </div>
        <div className="receipt">
          <h1 className="secondary-text">{values.displayValue}</h1>
          <h1 className="main-text">{values.mainValue}</h1>
        </div>
      </div>
    </div>
  );
}

export default CalculatorHead;
