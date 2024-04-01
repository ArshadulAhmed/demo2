import React from "react";
import  SideNavBar  from "../components/sideNav/SideNavBar";
import TopHeader from "../components/topHeader/TopHeader"
import '../assets/scss/mainLayout.scss'

function MainLayout(props) {
    return (
        <div className="mainLayout">
            <SideNavBar />
            <div className="rightMainContent">
                <TopHeader/>
                {props.children}
            </div>
        </div>
    );
}

export default MainLayout;