import React, { useState, useContext } from "react";
import { ThemeContext } from "../Contexts";

const Toggler = ({ changeTheme }) => {
  const [dark, setDark] = useState(false);
  const handleButton = () => {
    setDark(!dark);
    changeTheme();
  };
  const color = useContext(ThemeContext);
  const theme = dark ? color.dark : color.light;

  return (
    <div
      className={`text-xl flex h-6 w-16 justify-center items-center relative text-[${theme.bgButtons}] bg-[${theme.bgButtons}] rounded-2xl transition duration-500`}
    >
      <div
        className={`absolute transition duration-500 text-sm text-[${
          theme.background
        }] ${dark ? "translate-x-[40%]" : "-translate-x-[40%]"}`}
      >
        {!dark ? "Dark" : "Light"}
      </div>
      <div
        className={`transition duration-500 flex w-8 h-6 scale-[70%] absolute ${
          dark ? "-translate-x-1/2" : "translate-x-1/2"
        } z-10 rounded-2xl pointer bg-${theme.foreground}`}
        onClick={handleButton}
      ></div>
    </div>
  );
};

export default Toggler;
