import React, {useState} from "react";

import SideNavTop from './SideNavTop'
import SideNavStaticMenu from './SideNavStaticMenu'
import '../../assets/scss/sideNav.scss'


function SideNavBar(props){
    const [isOpen, setOpen] = useState(true)
    
    const handleToggleMenu = ()=>{
        setOpen(!isOpen)
    }

    return(
        <div className={isOpen ? "sideNavWrapper sideNavWrapperOpen": "sideNavWrapper sideNavWrapperClose"}>
            <SideNavTop isOpen={isOpen} handleToggleMenu={handleToggleMenu}/>
            <SideNavStaticMenu isOpen={isOpen}/>
        </div>
    )
}

export default SideNavBar;