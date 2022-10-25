import React, { useContext, useState } from "react";
import { CalcContext } from "../Contexts/CalcContext";
// import {ThemeContext} from '../Contexts'

const Buttons = () => {
  const [keys] = useState([
    {
      button: 7,
    },
    {
      button: 8,
    },
    {
      button: 9,
    },
    {
      button: "X",
    },
    {
      button: 4,
    },
    {
      button: 5,
    },
    {
      button: 6,
    },
    {
      button: "-",
    },
    {
      button: 1,
    },
    {
      button: 2,
    },
    {
      button: 3,
    },
    {
      button: "/",
    },
    {
      button: ".",
    },
    {
      button: 0,
    },
    {
      button: "00",
    },
    {
      button: "+",
    },
    {
      button: "AC",
    },
    {
      button: "=",
    },
  ]);

  const { calc, setCalc } = useContext(CalcContext);

  const operator = ["X", "/", "+", "-"];
  const equal = "=";
  const decimal = ".";
  const ac = "AC";

  const handleClickButton = (value) => {
    const numString = value.toString();
    let numValue;
    if (
      (numString === "0" || numString === "00") &&
      (calc.num === 0 || calc.num === Number("00"))
    ) {
      numValue = Number(calc.num + 0);
    } else {
      numValue = Number(calc.num + numString);
    }
    setCalc({
      ...calc,
      num: numValue,
      // num1: calc.num,
      num2: calc.res,
      displaySign: calc.sign,
    });
  };
  const handleButton = (e) => {
    e.preventDefault();
    let value = e.target.textContent;

    if (operator.includes(value)) {
      setCalc({
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0,
        // num1: calc.num,
        num2: calc.res,
        displaySign: calc.sign,
      });
    } else if (value === equal) {
      if (calc.num && calc.res) {
        const math = (a, b, sign) => {
          const result = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            X: (a, b) => a * b,
            "/": (a, b) => a / b,
          };
          return result[sign](a, b);
        };
        setCalc({
          sign: "",
          res: math(calc.res, calc.num, calc.sign),
          num: 0,
          displaySign: "",
        });
      }
    } else if (value === decimal) {
      setCalc({
        ...calc,
        num: calc.num.toString().includes(".") ? calc.num : calc.num + value,
      });
    } else if (value === ac) {
      console.log("ac", value);
      setCalc({
        sign: "",
        num: 0,
        res: 0,
        displaySign: "",
      });
    } else {
      handleClickButton(value);
    }
  };

  return (
    <div className={`grid grid-cols-4 gap-4 w-full`}>
      {keys.map((key) => (
        <button
          className={`bg-black border border-black hover:border-white font-bold text-xl text-white rounded-2xl m-1 transition duration-500 ${
            key.button === "AC" ? `col-span-2` : ``
          } ${key.button === "+" ? `row-span-2 text-4xl` : ``}`}
          onClick={handleButton}
          key={key.button}
        >
          {key.button}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
