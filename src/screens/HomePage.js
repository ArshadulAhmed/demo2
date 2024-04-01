import React, { useEffect } from "react";
import {useSelector} from 'react-redux'
import '../assets/scss/homePage.scss'
import GraphCards from '../components/graphCards/GraphCards'
import InfoCards from "../components/graphCards/InfoCards"

function HomePage(props) {
    const isOpen = useSelector((state)=> state.commonSlice.isOpen)

    return(
        <div className={isOpen ? "homePageWrapper homePageWrapperOpen": "homePageWrapper homePageWrapperClose"}>
            <div className="topCardSection">
                 <GraphCards/>
            </div>
            <div className="bottomSection">
            <div className="bottomSectionInner">
            <InfoCards/>
            </div>
            </div>
        </div>
    )
}
export default HomePage;