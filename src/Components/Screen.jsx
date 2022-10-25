import React, { useContext } from "react";
import { CalcContext } from "../Contexts/CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return (
    <div
      className={`flex justify-end items-end flex-col w-full p-4 text-white bg-black transition duration-500`}
    >
      <div
        className={`text-3xl w-full overflow-x-auto overflow-y-hidden text-right`}
      >
        {calc.num ? calc.num : calc.res}
      </div>
    </div>
  );
};
export default Screen;
