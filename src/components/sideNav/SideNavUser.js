import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

function SideNavUser({isOpen}){

    return(
        <div className="userBlock">
           
           {
            isOpen && (
                <div className="leftBlock">
           <div className="imageBlock"><FaRegCircleUser className="userImage"/></div>
           <div className="userInfo">
            <p>Brooklyn Simmons</p>
            <p>brooklyn@brooklyn.com</p>
           </div>
           </div>
            )
           }
           <MdMoreVert />
        </div>
    )
}

export default SideNavUser;