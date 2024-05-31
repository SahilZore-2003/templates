import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const PurchaseContainer = ({ showPurchaseContainer, setHtmlWithStyle }) => {
  const { content } = useSelector((state) => state.app);
  const [coupon, setCoupon] = useState("");



  return (
    <div className={` md:w-1/3 bg-card  shadow-lg shadow-shadow p-4 text-base md:fixed right-[5%] top-[10%] z-30 transition-all duration-200 ${showPurchaseContainer ? "opacity-100" : "opacity-0"}`}>
      <div className="text-lg font-semibold">
        <span>{content.contentTitle}</span>
        <p dangerouslySetInnerHTML={{ __html: setHtmlWithStyle(content.description).substring(0, 100) }}></p>
      </div>
      <hr className="mt-2 h-[.3px] bg-gray-500" />

      <div className="flex items-center gap-2 mt-2">
        <span className="text-lg font-bold">{content.rating}</span>
        <FaStar className="fill-[#0056d2]" />
        <span>({content.reviews.length}) reviews</span>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Category</h3>
        <p className="text-sm">{content.category}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Sections</h3>
        <p className="text-sm">{content.sections.length}</p>
      </div>

      <hr className="mt-2 h-[.3px] bg-gray-500" />

      <div className="my-4">
        <span className=" font-bold text-2xl text-[#0056d2]">
          &#x20B9; {parseInt(content.price).toLocaleString()}
        </span>
      </div>

      <button
        onClick={() => { }}
        className="bg-[#0056d2] w-full text-white font-semibold text-md p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
      >
        Add to cart
      </button>
    </div>
  );
};

export default PurchaseContainer;
