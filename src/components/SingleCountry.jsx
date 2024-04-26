import React, { useContext, useState } from "react";
import Topbar from "./Topbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function SingleCountry({ darkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  const handleOnclick = () => {
    navigate("/");
  };

  return (
    <div
      className={`${darkMode ? "bg-[#202C36] text-white" : ""} min-h-screen`}
    >
      <div className="py-8 lg:px-6">
        <button
          className={`${
            darkMode ? "bg-[#2B3844]" : ""
          } flex items-center gap-x-2 px-4 py-1 shadow-lg 
      font-light text-[14px]  mx-6 `}
          onClick={() => handleOnclick()}
        >
          <FaLongArrowAltLeft />
          Back
        </button>
      </div>

      <div className="mx-4 lg:px-8 lg:grid lg:grid-cols-[1fr,1fr] lg:space-x-32 ">
        <img src={item?.flags.svg} alt="" className="rounded-t-lg " />

        <div className="lg:grid lg:grid-cols-[1fr,1fr] lg:py-12">
          <div className={` text-[14px] space-y-3`}>
            <h1 className="my-4 font-extrabold text-[22px]">{item?.name}</h1>
            <p>
              <span className="font-semibold">Native Name: </span>{" "}
              {item?.nativeName}
            </p>
            <p className="">
              <span className="font-semibold">Population:</span>{" "}
              {item?.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span>{" "}
              {item?.region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>{" "}
              {item?.subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span> {item?.capital}
            </p>
          </div>

          <div className={` text-[14px] my-6 space-y-3 lg:py-10`}>
            <p className="">
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {item?.topLevelDomain}
            </p>
            <p>
              <span className="font-semibold ">
                Currencues:{" "}
                {item?.currencies?.map((currency) => currency.name).join(", ")}
              </span>
            </p>
            <p className="">
              <span className="font-semibold ">
                Capital:{" "}
                {item?.languages.map((language) => language?.name).join(", ")}
              </span>
            </p>
          </div>
          <div className="lg:block lg:w-[200%]">
            <h1 className="font-semibold mb-6">Border Countries:</h1>
            {item?.borders?.map((item, idx) => {
              return (
                <button className="px-4 py-2 border-2 mr-2 ">
                  <span className="font-light text-[12px]"></span>
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCountry;
