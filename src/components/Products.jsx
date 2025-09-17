import { DataContext } from "@/contextt/DataContext";
import React, { useContext, useEffect, useMemo, useState } from "react";
import Filter from "./Filter";
import loading from "../assets/loading.webm";
import ProductCard from "./ProductCard";
import Page from "./Page";
import Lottie from "lottie-react";
import found from "../assets/found.json";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [range, setRange] = useState([0, 2000]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // Added constant for items per page

  const handlePage = (SelectedPage) => {
    setPage(SelectedPage);
  };

  const categoryChange = (e) => {
    setCategory(e.target.value);
    console.log("categoryChange -> new value:", e.target.value);
  };

  const brandChange = (e) => {
    setBrand(e.target.value);
  };

  const { data, fetchProducts } = useContext(DataContext);

  useEffect(() => {
    if (typeof fetchProducts === "function") {
      fetchProducts();
    }
    window.scrollTo(0, 0);
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [search, category, brand, range]);

  const filterData = useMemo(() => {
    const list = Array.isArray(data) ? data : [];
    const q = (search || "").toLowerCase();

    return list.filter((item) => {
      return (
        item?.title?.toLowerCase?.().includes(q) &&
        (category === "ALL" || item?.category === category) &&
        (brand === "ALL" || item?.brand === brand) &&
        typeof item?.price === "number" &&
        item.price >= range[0] &&
        item.price <= range[1]
      );
    });
  }, [data, search, category, brand, range]);

  const dynamicPage = Math.max(
    1,
    Math.ceil((filterData?.length || 0) / itemsPerPage)
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12">
        {/* Filter section */}
        <div className="w-full md:w-1/4">
          <Filter
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            brand={brand}
            setBrand={setBrand}
            range={range}
            setRange={setRange}
            categoryChange={categoryChange}
            brandChange={brandChange}
          />
        </div>

        {/* Product Cards section */}
        {filterData?.length > 0 ? (
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6 gap-6">
              {filterData
                ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((product, idx) => (
                  <div key={idx}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>

            <div className="mt-4 flex justify-center">
              <Page
                handlePage={handlePage}
                page={page}
                dynamicPage={dynamicPage}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
            <Lottie animationData={found} classID="w-[500px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
