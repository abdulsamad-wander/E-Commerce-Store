// DataProvider.js
import React, { createContext, useState } from "react";
import axios from "axios";

// Create and export the context
export const DataContext = createContext(null);

// Named component — capitalized so hooks work correctly
export function DataaProvider({ children }) {
  // initialize state (null or [] depending on how you use it)
  const [data, setData] = useState(null);

  // example fetch function
  const fetchProducts = async () => {
    try {
      // NOTE: correct/fake API example: fakestoreapi.com
      const res = await axios.get("https://fakestoreapi.com/products?limit=20"); 
      // let dataDisplay = res.products;
      setData(res.data)
      // console.log(dataDisplay)
      // console.log("products:", res.data);
    } catch (error) {
      console.error("fetchProducts error:", error);
    }
  };
   let getUnique = (data, property)=>{
      let newVal = data?.map((e)=>{
        return e[property]
      })
      newVal = ["ALL",...new Set(newVal)];
      return newVal
    }
    const cateOnlyData = getUnique(data, "category");
    // console.log(cateOnlyData)
    const brandData = getUnique(data, "brand");

  return (
    <DataContext.Provider value={{ data, setData, fetchProducts, cateOnlyData, brandData }}>
      {children}
    </DataContext.Provider>
  );
}
