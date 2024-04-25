import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import data from "../../data.json";

function Content({ darkMode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion === "" || item.region === selectedRegion)
    );
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className={`${darkMode ? "bg-[#202C36]" : "bg-[#F2F2F2]"} h-auto `}>
      {/* Search Box */}
      <div className="px-[16px] py-4 relative">
        <IoIosSearch
          className="absolute top-6 left-12 "
          size={30}
          color="gray"
        />
        <input
          type="text"
          name=""
          className={`w-full h-[48px] pl-20 placeholder:text-[12px] placeholder:text-[#C4C4C4] 
          outline-none ${darkMode ? "bg-[#2B3844] text-white" : ""}`}
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="px-[16px]">
        <select
          className={`${
            darkMode ? "bg-[#2B3844] text-[#C4C4C4]" : ""
          } px-4  py-4 w-[200px]`}
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Filter by Region</option>
          {data
            .reduce((uniqueRegions, item) => {
              if (!uniqueRegions.includes(item.region)) {
                uniqueRegions.push(item.region);
              }
              return uniqueRegions;
            }, [])
            .sort()
            .map((region, idx) => (
              <option key={idx} value={region}>
                {region}
              </option>
            ))}
        </select>
      </div>
      {/* Countries */}
      <div className="mx-8 my-8n">
        {filteredData.length === 0 ? (
          <div
            className={`${
              darkMode ? "text-white" : ""
            } h-screen text-center my-20`}
          >
            No data found !
          </div>
        ) : (
          filteredData.map((item, idx) => (
            <div
              key={idx}
              className={`${
                darkMode ? "bg-[#2B3844]" : "bg-[#FFFF]"
              } my-12  pb-12 rounded-lg`}
            >
              <img src={item.flags.svg} alt="" className="rounded-t-lg" />

              <div className={`mx-6 text-[14px] ${darkMode? "text-white":""}`}>
                <h1 className="my-4 font-extrabold">{item.name}</h1>
                <p className="">
                  <span className="font-semibold">Population:</span>{" "}
                  {item.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Region:</span>
                  {item.region}
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>{" "}
                  {item.capital}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Content;
