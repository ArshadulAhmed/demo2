import React, {useState} from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";

import SideNavTop from './SideNavTop'
import SideNavStaticMenu from './SideNavStaticMenu'
import '../../assets/scss/sideNav.scss'
import { handleMenuToggle } from "../../redux/reducers/commonSlice";


function SideNavBar(props){
    const dispatch = useDispatch()
    const isOpen = useSelector((state)=> state.commonSlice.isOpen)
  
    
    const handleToggleMenu = ()=>{
        dispatch(handleMenuToggle(isOpen))
    }

    return(
        <div className={isOpen ? "sideNavWrapper sideNavWrapperOpen": "sideNavWrapper sideNavWrapperClose"}>
            <SideNavTop isOpen={isOpen} handleToggleMenu={handleToggleMenu}/>
            <SideNavStaticMenu isOpen={isOpen}/>
        </div>
    )
}

export default SideNavBar;