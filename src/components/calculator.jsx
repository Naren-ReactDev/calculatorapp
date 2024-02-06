import { useState } from "react";
import { Button } from "./Button";
export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondtNum] = useState(0);
  const [operator, setOperator] = useState();
  const operationsList = {
    ADD: "+",
    SUB: "-",
    MULTI: "X",
    DIVIDE: "/",
  };
  const performCalculation = (value) => {
    console.log("firstNum==>", firstNum);
    console.log("secondNum==>", secondNum);
    console.log("operator==>", operator);
    if (!operator|| !firstNum || !secondNum) {
      return;
    }
    let result;
    switch (operator) {
      case "ADD":
        result = Number(firstNum) + Number(secondNum);
        break;
      case "SUB":
        result = Number(firstNum) - Number(secondNum);
        break;
      case "MULTI":
        result = Number(firstNum) * Number(secondNum);
        break;
      case "DIVIDE":
        result = Number(firstNum) / Number(secondNum);
        break;
    }
    setDisplayValue(result);
    setFirstNum(0);
    setSecondtNum(0);
    setOperator();
  };
  const setOperatorValue = (value) => {
    setOperator(value);
    setDisplayValue(
      displayValue === 0 ? 0 : displayValue + operationsList[value]
    );
  };

  const handleButtonClick = (value) => {
    console.log(value);
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
        setDisplayValue(displayValue === 0||displayValue === "0" ? value : displayValue + value);
        if (!operator) {
          setFirstNum(displayValue === 0 ? value : displayValue + value);
        } else {
          setSecondtNum(secondNum===0&& value===0?value:secondNum + value);
        }
        break;
      case "RESET":
        setDisplayValue(0);
        setFirstNum(0);
        setSecondtNum(0);
        setOperator();
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
        firstNum===0?setOperatorValue(''):setOperatorValue(value)
        break;
      case "CALCULATE":
        performCalculation(value);
        break;
      default:
        break;      
    }

    console.log(displayValue);
  };

  return (
    <>
      <h1>Calculator</h1>
      <label
        style={{
          textAlign: "right",
          height: "60px",
          width: "210px",
          border: "solid",
          marginBottom: "10px",
        }}
      >
        {displayValue}
      </label>
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
          name="RESET"
          value="RESET"
          h="50px"
          w="105px"
          handleButtonClick={handleButtonClick}
        ></Button>
        <Button
          name="CALCULATE"
          value="="
          h="50px"
          w="105px"
          handleButtonClick={handleButtonClick}
        ></Button>
      </div>
    </>
  );
};
