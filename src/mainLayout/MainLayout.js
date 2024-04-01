import React from "react";
import { useSelector } from "react-redux";
import  SideNavBar  from "../components/sideNav/SideNavBar";
import TopHeader from "../components/topHeader/TopHeader"
import '../assets/scss/mainLayout.scss'

function MainLayout(props) {
    const isOpen = useSelector((state)=> state.commonSlice.isOpen)
  
    return (
        <div className="mainLayout">
            <SideNavBar />
            <div className={isOpen ? "rightMainContent rightMainContentOpen": "rightMainContent"}>
                <TopHeader/>
                {props.children}
            </div>
        </div>
    );
}

export default MainLayout;