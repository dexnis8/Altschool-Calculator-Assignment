import React, { useContext } from "react";
import Screen from "./Screen";
import Toggler from "./Toggler";
import Buttons from "./Buttons";
import { ThemeContext } from "../Contexts";

const Body = ({ darkMode, changeTheme }) => {
  const color = useContext(ThemeContext);
  const theme = darkMode ? color.dark : color.light;

  return (
    <main className={`flex h-[80vh]`}>
      <div
        className={`flex flex-col w-[90vw] sm:w-[400px] bg-black text-[${theme.foreground}] rounded-2xl transition duration-500`}
      >
        <div className={`flex justify-center items-center h-[5vh]`}>
          <Toggler darkMode={darkMode} changeTheme={changeTheme} />
        </div>
        <div
          className={`flex h-[25vh] bg-[${theme.background}] transition duration-500 text-[${theme.foreground}]`}
        >
          <Screen darkMode={darkMode} />
        </div>
        <div
          className={`flex h-[50vh] md:h-[50vh] rounded-2xl transition duration-500 text-white bg-[#222222] p-4`}
        >
          <Buttons darkMode={darkMode} />
        </div>
      </div>
    </main>
  );
};
export default Body;
