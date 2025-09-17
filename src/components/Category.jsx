import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loading from "../assets/loading.webm";
import { ChevronLeft } from "lucide-react";
import ProductList from "@/Minor/ProductList";

const Category = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();

  //   console.log(category);

  //api function
  const getFilterData = async () => {
    try {
      let res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setSearchData(res.data);
    } catch (error) {
      console.log("API Error:", error);
      setSearchData([]);
    }
  };

  useEffect(() => {
    if (category) getFilterData();
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      {Array.isArray(searchData) && searchData.length > 0 ? (
        <div className="max-w-5xl mx-auto mt-10 mb-10 px-1">
          <h1 className="text-center text-2xl font-bold uppercase mb-4">{category}</h1>
          
          {searchData.map((item, indx) => {
            return <ProductList key={indx} item={item} />;
          })}
          <button
            className="bg-gray-200 mt-6 justify-end  text-black/90 px-2 py-1 rounded-md flex gap-0 cursor-pointer items-center text-md font-medium"
            onClick={() => navigate("/")}
          >
            <ChevronLeft />
            Back
          </button>
        </div>
      ) : (
        <div className="justify-center items-center h-[400px] flex">
          <video autoPlay loop>
            <source src={loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Category;
