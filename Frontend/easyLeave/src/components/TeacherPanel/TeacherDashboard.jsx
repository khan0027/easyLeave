import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useState } from 'react';
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const menuItems = [
{
        icons:<MdOutlineDashboard color='white' size={23}/>,
        label:'Dashboard'
    },
    {
        icons:<CiUser   color='white' size={23}/>,
        label:'Profile'
    },
    {
        icons:<MdCurrencyRupee color='white'  size={23}/>,  
        label:'Salary'
    },
    {
        icons:<CiSettings color='white' size={23}/>,
        label:'Settings'
    }
]



const TeacherDashboard = () => {

    const [open,setOpen] = useState(false);
  
    return (
    // {header}
    <nav class = {`shadow-md h-screen duration-500 ${open ? "w-60" : "w-18"} p-2 flex flex-col bg-blue-900 `}>
        <div class = " px-3 py-2 h-20 flex justify-between items-center">
            <img src="aju.jpg" alt="logo" class = {`${open ? "w-10" : "w-0"} rounded-md`}/>
            <div><MdMenuOpen size={32} color='white' class = "cursor-pointer" onClick={() => setOpen(!open)} /></div>
        </div>
        {/* {body} */}
        <ul class="flex-1" >
            {
                menuItems.map((item,index) => {
                    return(
                        <li key={index} class = "px-3 py-2 my-6 hover:bg-blue-700 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group " >
                            <div>
                                {item.icons}
                            </div>
                            <p class = {`${!open && "w-0 translate-x-24"} duration-500 overflow-hidden text-white `} >
                           {item.label}     
                            </p>
                            <p class = {` ${open && 'hidden'} absolute left-32 shadow-md  rounded-md 
                            w-0
                            p-0
                            duration-230
                            overflow-hidden
                            group-hover:w-fit
                            group-hover:left-18
                            group-hover:p-2
                            `} >
                           {item.label}     
                            </p>
                        </li>
                    )
                })
            }
        </ul>

        {/* footer */}
        
        <div className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-700 rounded-md group relative" >
                <CgProfile color='white' size={23} />
                <p className={`${!open && "w-0 translate-x-24 "} duration-500 overflow-hidden text-white `} >
                    Akansha
                </p>
                <p className={` ${open && 'hidden'} absolute left-32 shadow-md  rounded-md 
                            w-0 p-0 duration-230 overflow-hidden
                            group-hover:w-fit bg-blue-100 group-hover:left-18 group-hover:p-2 `} >
                    Akansha
                </p>
        </div>


        <div class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-700 rounded-md group relative" >
            <IoIosLogOut  color='white' size={23}/>
        <p class = {`${!open && "w-0 translate-x-24 "} duration-500 overflow-hidden text-white `} >
        logout    
         </p>
         <p class = {` ${open && 'hidden'} absolute left-32 shadow-md  rounded-md 
                            w-0 p-0 duration-230 overflow-hidden
                            group-hover:w-fit bg-blue-100 group-hover:left-18 group-hover:p-2 `} >
                            logout   
                            </p>        
        </div>

    </nav>
  )
}

export default TeacherDashboard



