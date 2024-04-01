import React, { useEffect } from "react";
import '../assets/scss/homePage.scss'
import GraphCards from '../components/graphCards/GraphCards'
import InfoCards from "../components/graphCards/InfoCards"

function HomePage(props) {
 

    return(
        <div className="homePageWrapper">
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