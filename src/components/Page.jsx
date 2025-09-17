import React from "react";

const Page = ({ handlePage, page, dynamicPage }) => {
  const getPage = (curr, total) => {
    const pages = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (curr <= 3) {
        pages.push(1, 2, 3, "...", total);
      } else if (curr >= total - 2) {
        pages.push(1, "...", total - 2, total - 1, total);
      } else {
        pages.push(1, "...", curr - 1, curr, curr + 1, "...", total);
      }
    }
    return pages;
  };

  return (
    <div className="mt-10 space-x-4">
      <button
        disabled={page === 1}
        onClick={() => handlePage(page - 1)}
        className={`${
          page === 1
            ? "text-white/100 cursor-pointer bg-gradient-to-r from-purple-400 to-red-400  hover:bg-gradient-to-br font-sans font-semibold rounded-lg text-sm px-3 py-2 mt-2"
            : "text-white/100 cursor-pointer bg-gradient-to-r from-red-600 to-purple-600  hover:bg-gradient-to-br font-sans font-semibold rounded-lg text-sm px-3 py-2 mt-2 "
        }`}
      >
        prev
      </button>

      {getPage(page, dynamicPage)?.map((itm, idx) => {
        return (
          <span
            key={idx}
            onClick={() => typeof itm === "number" && handlePage(itm)}
            className={`cursor-pointer ${
              itm === page ? "font-bold text-blue-600" : "text-white/90"
            }`}
          >
            {itm}
          </span>
        );
      })}

      <button
        disabled={page === dynamicPage}
        onClick={() => handlePage(page + 1)}
        className={`${
          page === dynamicPage
            ? "text-white/100 cursor-pointer bg-gradient-to-r from-purple-400 to-red-400  hover:bg-gradient-to-br font-sans font-semibold rounded-lg text-sm px-3 py-2 mt-2"
            : "text-white/100 cursor-pointer bg-gradient-to-r from-red-600 to-purple-600 hover:bg-gradient-to-br font-sans font-semibold rounded-lg text-sm px-3 py-2 mt-2"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Page;
