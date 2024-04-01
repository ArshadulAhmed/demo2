import React from "react";


import '../../assets/scss/topHeader.scss'


function TopHeader(props){

    return(
        <div className="topHeaderWrapper">
           <div className="left">
           <p className="heading">Hello, <span>Brooklyn Simmons</span></p>
           <p className="subHeading">Welcome to <span>spot trading</span></p>
           </div>
           <div className="right">
            <p>Start Trading</p>
           </div>
        </div>
    )
}

export default TopHeader;