import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { DataContext } from "@/contextt/DataContext";
// import React, { useContext} from 'react'
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const { data, fetchProducts } = useContext(DataContext);

  let getUnique = (data, property) => {
    let newVal = data?.map((e) => {
      return e[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };
  const cateOnlyData = getUnique(data, "category");
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof fetchProducts === "function") {
      fetchProducts();
    }
  }, [fetchProducts]);

  //Arrow function(left & Right)
  const SamplePrevArrow = (props) => {
    const { className, onClick, style } = props;

    const handleMouseOver = (e) => {
      e.currentTarget.style.backgroundColor = "#555";
    };

    const handleMouseOut = (e) => {
      e.currentTarget.style.backgroundColor = "#f53347";
    };
    return (
      <>
        <div
          onClick={onClick}
          className={`h-[40px] w-[40px] m-[2px] text-white ${className}`}
          style={{ zIndex: 3 }}
        >
          <AiOutlineArrowLeft
            className="h-[40px] w-[40px] m-[2px] text-white"
            style={{
              ...style,
              display: "block",
              borderRadius: "50px",
              backgroundColor: "#f53347",
              position: "absolute",
              padding: "2px",
              left: "50px",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
      </>
    );
  };
  const SampleNextArrow = (props) => {
    const { className, onClick, style } = props;
    const handleMouseOver = (e) => {
      e.currentTarget.style.backgroundColor = "#555";
    };

    const handleMouseOut = (e) => {
      e.currentTarget.style.backgroundColor = "#f53347";
    };
    return (
      <>
        <div
          onClick={onClick}
          className={`h-[40px] w-[40px] m-[2px] text-white ${className}`}
        >
          <AiOutlineArrowRight
            className="h-[40px] w-[40px] m-[2px] text-white"
            style={{
              ...style,
              display: "block",
              borderRadius: "50px",
              backgroundColor: "#f53347",
              position: "absolute",
              padding: "2px",
              right: "50px",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
      </>
    );
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <div className="text-white">
      <Slider {...settings}>
        {data?.slice(10, 30).map((item, indx) => {
          // remove negative z-index and ensure image sits above
          return (
            <div
              key={indx}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex -z-10 px-4  md:px-16"
            >
              <div className="container max-w-[1200px] mx-auto min-h-screen flex py-10 md:flex-row flex-col gap-10 justify-center items-center">
                <div className="space-y-6 w-full md:w-1/2 order-2 md:order-1">
                  <h1 className="text-yellow-500 font-semibold text-sm  font-sans">
                    Powering Your World with the Best Products
                  </h1>
                  <div className="line-clamp-3 text-2xl md:text-3xl  uppercase font-bold max-w-full text-white/80">
                    {item.title}
                  </div>
                  <small className="text-gray-400 pr-7 line-clamp-2 max-w-full font-mono">
                    {item.description}
                  </small>
                  <button
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="text-white/100 cursor-pointer bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-sans font-semibold rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
                  >
                    Shop Now
                  </button>
                </div>

                <div className="z-5 w-full md:w-1/2 order-1 md:order-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="rounded-full w-[500px] object-cover h-[450px] md:w-[400px] md:h-[350px] 
    lg:w-[500px] lg:h-[450px] hover:scale-105 transition-all shadow-xl shadow-red-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Featured;
