// DataProvider.js
import React, { createContext, useState } from "react";
import axios from "axios";

// Create and export the context
export const DataContext = createContext(null);

// Named component — capitalized so hooks work correctly
export function DataProvider({ children }) {
  // initialize state (null or [] depending on how you use it)
  const [data, setData] = useState(null);

  // example fetch function
  const fetchProducts = async () => {
    try {
      // NOTE: correct/fake API example: fakestoreapi.com
      const res = await axios.get("https://dummyjson.com/products"); 
      // let dataDisplay = res.products;
      setData(res.data.products)
      // console.log(dataDisplay)
      // console.log("products:", res.data.products);
    } catch (error) {
      console.error("fetchProducts error:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchProducts }}>
      {children}
    </DataContext.Provider>
  );
}
