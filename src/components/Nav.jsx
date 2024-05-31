import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
// import logo from "../../public/bridgeyu.svg"


const Nav = () => {
  const { currSite, currTheme } = useSelector((state) => state.app);
  const [search, setSearch] = useState(false)


  return (
    // <nav data-theme={`${currTheme}`}>
    //   <div className="flex flex-row items-center justify-between px-4 py-2 bg-background">
    //     <Link to={`/?sitename=${currSite}`}>
    //       <span className="font-bold text-2xl text-base">{currSite}</span>
    //     </Link>
    //     <button className="text-sm font-medium text-primary hover:bg-primary hover:text-white px-4 py-1 rounded-lg">
    //       Categories
    //     </button>
    //     <div className="">
    //       <div className="relative border-[1px] hover:border-primary rounded-lg">
    //         <CiSearch
    //           size={15}
    //           className="absolute top-0 bottom-0 my-auto text-muted left-3"
    //         />
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="w-full text-xs py-1 pl-12 pr-4 border rounded-md outline-none bg-background focus:border-border text-base"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex flex-row space-x-6 items-center mr-4">
    //       <button className="hover:bg-primary hover:text-white px-2 py-1 rounded-lg duration-150">
    //         <IoIosNotificationsOutline
    //           size={25}
    //           className="fill-base hover:fill-white"
    //         />
    //       </button>
    //       <button className="hover:bg-primary hover:text-white px-2 py-1 rounded-lg duration-150">
    //         <IoCartOutline size={25} className="fill-base hover:fill-base" />
    //       </button>
    //       {/* <button>
    //         <IoPersonOutline size={20} color="#000" />
    //       </button> */}
    //       <button className="bg-primary rounded-lg px-4 py-2 text-white text-sm font-medium hover:opacity-80 duration-150">
    //         Login
    //       </button>
    //     </div>
    //   </div>
    //   <Separator />
    // </nav>
    <nav className="flex items-center justify-between px-10 md:px-12 py-4 relative">
      <div className="">
        <h2>{currSite}</h2>
      </div>

      <div className="hidden md:flex w-[300px] flex-row-reverse gap-2 items-center border border-[#0a5dc9] py-1 px-4 rounded-md overflow-hidden">
        <input type="text" className="grow border-none outline-none placeholder:text-[#0a5dc9]" placeholder="search your favourite course." />
        <button><CiSearch className="fill-[#0a5dc9]" /></button>
      </div>



      <div className="md:hidden">
        <CiSearch onClick={() => setSearch(true)} size={20} className=" fill-[#0a5dc9]" />
      </div>
      <div className={`hidden md:!hidden gap-2 absolute inset-0 bg-white shadow-md shadow-white ${search && " !flex"} `}>
        <input type="text" className="grow px-2 outline-none border-none" placeholder="What do you want to learn." />
        <button onClick={() => setSearch(false)} className="grid place-items-center p-4 bg-[#0a5dc9]">
          <CiSearch size={20} className="fill-white" />
        </button>

      </div>
    </nav>
  );
};

export default Nav;
