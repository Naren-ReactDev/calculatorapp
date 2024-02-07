import { useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);


  const operationsList = {
    ADD: "+",
    SUB: "-",
    MULTI: "*",
    DIVIDE: "/",
  };

  const performCalculation = (value) => {
     setDisplayValue(eval(displayValue)); 

  };
  const setOperatorValue = (value) => {   
  // if(['*','+','/','-'].includes(displayValue?.toString.slice(-1))){
  //   return;
  //  }
    setDisplayValue(
      displayValue === 0 ? 0 : displayValue + operationsList[value]
    );
  };

  const handleButtonClick = (value) => {

    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        setDisplayValue(
          displayValue === 0 || displayValue === "0"
            ? value
            : displayValue + value
        );     
        break;
      case "RESET":
        setDisplayValue(0);
        break;
      case "DEL":
        setDisplayValue(
          displayValue === 0 || displayValue === ""
            ? 0
            : displayValue.slice(0, -1)
        );
        break;
      case "ADD":
      case "SUB":
      case "MULTI":
      case "DIVIDE":
        setOperatorValue(value);
        break;
      case "CALCULATE":
        performCalculation(value);
        break;
      default:
        break;
    }

  };

  return (
    <>
   
			<div className="headersection">
				<h3>Calc</h3>
        
				<div className="numbers">		
					<p id="themeone">1</p>
					<p id="themetwo">2</p>
					<p id="themethree">3</p>
				</div>
			</div>
			<div className="control">
      <p id="theme">THEME</p>
				<div className="box">
					<div id="circle"></div>
				</div>
			</div>
	

      <input className="displayTextBox" value={displayValue}></input>
      <div className="buttonGroup">
        <div>
          <Button
            name="7"
            value="7"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="8"
            value="8"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="9"
            value="9"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            styleClass="delButton"
            name="DEL"
            value="DEL"
            handleButtonClick={handleButtonClick}
          ></Button>
        </div>
        <div>
          <Button
            name="4"
            value="4"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="5"
            value="5"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="6"
            value="6"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="ADD"
            value="+"
            handleButtonClick={handleButtonClick}
          ></Button>
        </div>

        <div>
          <Button
            name="1"
            value="1"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="2"
            value="2"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="3"
            value="3"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="SUB"
            value="-"
            handleButtonClick={handleButtonClick}
          ></Button>
        </div>

        <div>
          <Button
            name="."
            value="."
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="0"
            value="0"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="DIVIDE"
            value="/"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            name="MULTI"
            value="x"
            handleButtonClick={handleButtonClick}
          ></Button>
        </div>
        <div>
          <Button
            styleClass="resetButton"
            name="RESET"
            value="RESET"
            handleButtonClick={handleButtonClick}
          ></Button>
          <Button
            styleClass="equalButton"
            name="CALCULATE"
            value="="
            handleButtonClick={handleButtonClick}
          ></Button>
        </div>
      </div>
    </>
  );
};
