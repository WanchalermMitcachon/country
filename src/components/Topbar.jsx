import React, { useContext, useState } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { AppContext } from "../App";

function Topbar() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <div
      className={`h-[80px]  flex justify-between items-center px-[13px] lg:px-14 ${
        darkMode ? "bg-[#2B3844] text-white" : "text-black border-b-2 bg-white "
      }` }
    >
      <h1 className="font-extrabold text-[14px] leading-5">
        Where is the world?
      </h1>
      <div className="flex space-x-2" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <IoMoonSharp /> : <IoMoonOutline />}
        <h1 className="font-semibold text-[12px]">Dark Mode</h1>
      </div>
    </div>
  );
}

export default Topbar;
