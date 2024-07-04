import CalculatorButton from "./CalculatorButton";

function CalculatorBody({values, setValues}) {


  function handleSymbolClick(symbol){
    setValues((prevValues) => {
      let displaySymbol;
      if (symbol=='*'){
        displaySymbol = '×'
      }else if(symbol == '/'){
        displaySymbol = '÷'
      }else{
        displaySymbol = symbol
      }

      let updatedValues = {...prevValues}
      if(updatedValues['secondaryValue'] == '0'){
        updatedValues['secondaryValue'] = updatedValues['mainValue'] + ` ${symbol}`
        updatedValues['displayValue'] = updatedValues['mainValue'] + ` ${displaySymbol}`
      }else{
        updatedValues['secondaryValue'] = updatedValues['secondaryValue'] + " " +updatedValues['mainValue'] + ` ${symbol}`
        updatedValues['displayValue'] = updatedValues['displayValue'] + " " +updatedValues['mainValue'] + ` ${displaySymbol}`
      }
      updatedValues['mainValue'] = '0'
      return updatedValues
    })
  }

  function handleNumberClick(num){
    setValues((prevValue) => {
      let updatedValue = {...prevValue}
      if(num ==='.' && updatedValue['mainValue'] === '0'){
        updatedValue['mainValue'] = `0.`
      }
      else if(updatedValue['mainValue']==="0"){
        updatedValue['mainValue'] = `${num}`
      }
      else{
        updatedValue['mainValue'] = updatedValue['mainValue']+`${num}`
      }
      
      return updatedValue
    })
  }

  function handleAC(){
    setValues(() => ({mainValue:"0", secondaryValue:'0', displayValue:'0'}))
  }

  function handleDEL(){
    setValues((prevValue) => {
      let updatedValue = {...prevValue}
      console.log(updatedValue['mainValue']);
      console.log(updatedValue['mainValue'].length);
      if(updatedValue['mainValue'].length === 1){
        updatedValue['mainValue'] = '0'
      }else{
        updatedValue['mainValue'] = updatedValue['mainValue'].slice(0,-1)
      }
      return updatedValue
    })
  }

  function handleEquals(){
    const expression = values.secondaryValue + values.mainValue
    let result;
    result = eval(expression).toFixed(2)
    setValues(() => ({mainValue:result, secondaryValue:'0', displayValue:'0'}))
  }

  return (
    <div className="cal-body grid grid-cols-4 gap-4">
      <CalculatorButton onClick={handleAC} type={"symbol"}>AC</CalculatorButton>
      <CalculatorButton onClick={handleDEL} type={"symbol"}>DEL</CalculatorButton>
      <CalculatorButton onClick={()=> handleSymbolClick('%')} type={"symbol"}>
        <i className="fa-solid fa-percent"></i>
      </CalculatorButton>
      <CalculatorButton onClick={()=> handleSymbolClick('*')} type={"symbol"}>
        <i className="fa-solid fa-xmark"></i>
      </CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(7)} type={"number"}>7</CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(8)} type={"number"}>8</CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(9)} type={"number"}>9</CalculatorButton>
      <CalculatorButton onClick={()=> handleSymbolClick('/')} type={"symbol"}>
        <i className="fa-solid fa-divide"></i>
      </CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(4)} type={"number"}>4</CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(5)} type={"number"}>5</CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(6)} type={"number"}>6</CalculatorButton>
      <CalculatorButton onClick={()=> handleSymbolClick('-')} type={"symbol"}>
        <i className="fa-solid fa-minus"></i>
      </CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(1)} type={"number"}>1</CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(2)} type={"number"}>2</CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(3)} type={"number"}>3</CalculatorButton>
      <CalculatorButton onClick={()=> handleSymbolClick('+')} type={"symbol"}>
        <i className="fa-solid fa-plus"></i>
      </CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick(0)} type={"number"}>0</CalculatorButton>
      <CalculatorButton onClick={()=> handleNumberClick('.')} type={"number"}>
        <i
          className="fa-solid fa-circle fa-2xs"
          style={{ fontSize: "0.4rem" }}
        ></i>
      </CalculatorButton>
      <CalculatorButton onClick={handleEquals} cls="col-span-2" type={"symbol btn-block"}>
        <i className="fa-solid fa-equals"></i>
      </CalculatorButton>
    </div>
  );
}

export default CalculatorBody;
