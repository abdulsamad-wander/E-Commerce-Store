import { DataContext } from "@/contextt/DataContext";
import React, { useContext } from "react";

const Filter = ({
  search = "",
  setSearch = () => {},
  category = "", 
  brand = "ALL",
  setCategory = () => {},
  setBrand = () => {},
  // default range is [min, max]
  range = [0, 2000],
  setRange = () => {},
  brandChange = () => {},
  categoryChange = () => {}
}) => {
  const ctx = useContext(DataContext) || {};
  const cateOnlyData = Array.isArray(ctx.cateOnlyData) ? ctx.cateOnlyData : [];
  const brandData = Array.isArray(ctx.brandData) ? ctx.brandData : [];

  const minVal = Array.isArray(range) ? Number(range[0] ?? 0) : 0;
  const maxVal = Array.isArray(range) ? Number(range[1] ?? 0) : 0;

  const handleRangeChange = (newMax) => {
    if (typeof setRange === "function") {
      setRange([minVal, Number(newMax)]);
    }
  };
  const resetFilters = () => {
    if (typeof setCategory === "function") setCategory("ALL");  
    if (typeof setBrand === "function")    setBrand("ALL");
    if (typeof setSearch === "function")   setSearch("");
    if (typeof setRange === "function")    setRange([0, 2000]);
  };

  return (
    <div className="bg-gray-200 mt-4 p-2 md:p-4 rounded-md h-max w-full md:w-auto mx-auto ">
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => typeof setSearch === "function" && setSearch(e.target.value)}
        className="bg-black/90 text-white w-full p-2 rounded-md border-2 border-gray-200 "
      />

      <h1 className="mt-5 text-xl font-semibold text-black text-start">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        
        {cateOnlyData.length === 0 ? (
          <div className="text-sm text-gray-600">No categories</div>
        ) : (
          cateOnlyData.map((item, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <input
                type="radio"               // CHANGE: keep radio so only one category is selectable
                name="category"
                checked={category === item}
                value={item}
                onChange={categoryChange}
                className="cursor-pointer"
              />
              <button
                className="uppercase cursor-pointer text-black"
                onClick={() => categoryChange({ target: { value: item } })}
              >
                {item}
              </button>
            </div>
          ))
        )}
      </div>

      <h1 className="mt-5 text-xl font-semibold text-black text-start">Brand</h1>
      <div className="flex flex-col gap-2 mt-3 text-black">
        <select className="border-0 bg-white text-black p-1 cursor-pointer" value={brand} onChange={brandChange}>
          <option value="ALL">All Brands</option>
          {brandData.length > 0 ? (
            brandData.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))
          ) : (
            <option disabled>No brands</option>
          )}
        </select>
      </div>

      <h1 className="mt-5 text-xl font-semibold text-black text-start">Price Range</h1>
      <div className="flex flex-col gap-2 text-black/80 text-sm">
        <label>Price Range: ${minVal} — ${maxVal}</label>

        <input
          type="range"
          min={minVal}
          max={2000}
          value={maxVal}
          onChange={(e) => handleRangeChange(e.target.value)}
          className="cursor-pointer"
        />

        <button
          onClick={resetFilters}
          className="text-white/100 cursor-pointer bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-br font-sans font-semibold rounded-lg text-sm px-3 py-2 mt-2"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
