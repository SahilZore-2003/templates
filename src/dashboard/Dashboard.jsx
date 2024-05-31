import React from 'react'
import { FaBars } from "react-icons/fa6";
import { setIsSideBarOpen } from '../redux/slices/dashboardSlice';
import { useDispatch, useSelector } from 'react-redux';


const Dashboard = () => {

    const dispatch = useDispatch()
    const { isSidebarOpen } = useSelector(state => state.dashboard)


    // console.log(isSideBarOpen)


    return (
        <nav className='flex items-center gap-2 px-4 py-4'>
            <FaBars className='sidebar-oepn-btn cursor-pointer' size={20} onClick={() => dispatch(setIsSideBarOpen(!isSidebarOpen))} />
            <h1 className='font-bold text-2xl'>Dashboard</h1>
        </nav>

    )
}

export default Dashboard
