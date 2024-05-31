
import {
    MdOutlineAttachMoney,
    MdOutlineBarChart,
    MdOutlineClose,
    MdOutlineCurrencyExchange,
    MdOutlineGridView,
    MdOutlineLogout,
    MdOutlineMessage,
    MdOutlinePeople,
    MdOutlineSettings,
    MdOutlineShoppingBag,
} from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { setIsSideBarOpen } from "../redux/slices/dashboardSlice";

const Sidebar = () => {
    const { isSidebarOpen, themeMode } = useSelector(state => state.dashboard)
    const dispatch = useDispatch()

    const navbarRef = useRef(null);

    // closing the navbar when clicked outside the sidebar area
    const handleClickOutside = (event) => {
        if (
            navbarRef.current &&
            !navbarRef.current.contains(event.target) &&
            event.target.className !== "sidebar-oepn-btn"
        ) {
            dispatch(setIsSideBarOpen(false))
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            className={`sidebar`}
            ref={navbarRef}
        >
            <div className={`relative transition-all duration-300 flex flex-col top-0  h-screen overflow-x-hidden  lg:min-w-fit bg-white ${isSidebarOpen ? "w-[200px]" : "w-[0px]"}`} style={{ boxShadow: "black 0px 7px 29px 0px" }}>
                <div className="flex items-center justify-between gap-2 px-4 py-2">
                    <div className="sidebar-brand flex items-center gap-2">
                        <FaHouseUser size={20} />
                        <span className={`font-bold text-2xl ${!isSidebarOpen && ""}`}>BridgeYu.</span>
                    </div>
                </div>
                <div className="py-4 grow">
                    <ul className="menu-list px-4 flex flex-col gap-2">
                        <li className="menu-item">
                            <Link to="/dashboard" className="menu-link active  flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlineGridView size={18} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/dashboard/statics" className="menu-link flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlineBarChart size={20} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Statistics</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlineAttachMoney size={20} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Payment</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlineCurrencyExchange size={18} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Transactions</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlineShoppingBag size={20} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Products</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlinePeople size={20} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Customer</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlineMessage size={18} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Messages</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="py-4">
                    <ul className="menu-list px-4 flex flex-col gap-3">
                        <li className="menu-item">
                            <Link to="/" className="menu-link flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlineSettings size={20} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Settings</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link flex items-center gap-2">
                                <span className="menu-link-icon">
                                    <MdOutlineLogout size={20} />
                                </span>
                                <span className={`menu-link-text ${!isSidebarOpen && ""}`}>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;