import React from 'react'
import { FaBars } from "react-icons/fa6";
import Sidebar from './SideBar';
import { setIsSideBarOpen } from '../redux/slices/dashboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const index = () => {

    const dispatch = useDispatch()
    const { isSidebarOpen, themeMode } = useSelector(state => state.dashboard)

    return (
        <div className='fixed inset-0 h-screen flex'>
            <Sidebar />
            <div className={`main-container transition-all duration-300 relative grow bg-white`}>
                <Outlet />
            </div>
        </div>
    )
}

export default index
