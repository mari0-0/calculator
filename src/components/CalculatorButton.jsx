function CalculatorButton({type, cls, onClick ,children}) {
  let onclk = onClick
  return (
    <div className={cls}>
      <button onClick={onclk} className={type}>{children}</button>
    </div>
  );
}

export default CalculatorButton;
