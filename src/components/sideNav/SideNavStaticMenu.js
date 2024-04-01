import React from "react";
import {useLocation} from 'react-router-dom'
import SideNavUser from "./SideNavUser";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function SideNavStaticMenu({isOpen}){
    const {pathname} = useLocation()
    return(
        <div className="sideNavStaticMenuWrapper commonMenuWrapper">
            <Link to='/notification' className={pathname === '/notification' ? 'active': ''}>
            <div className="menuWrapper">
                <div className="iconBlock"><IoIosNotificationsOutline /></div>{isOpen && <><p>Notification</p><p className="notificationCount"><span>10</span></p></>}
            </div>
            </Link>
            <Link to='/support' className={pathname === '/support' ? 'active': ''}>
            <div className="menuWrapper">
                <div className="iconBlock"><MdOutlineContactSupport /></div>{isOpen && <p>Support</p>}
            </div>
            </Link>
            <Link to='/settings' className={pathname === '/settings' ? 'active': ''}>
            <div className="menuWrapper">
                <div className="iconBlock"><IoSettingsOutline /></div>{isOpen && <p>Settings</p>}
            </div>
            </Link>

            <SideNavUser isOpen={isOpen}/>
        </div>
    )
}

export default SideNavStaticMenu;