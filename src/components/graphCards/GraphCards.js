import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

import {PopulationChat} from "../chart/PopulationChat"
import {CurrenyChart} from "../chart/CurrenyChart"
import {NewsSection} from "../chart/NewsSection"


function GraphCards(props) {
    return(
        <div className="homePageWrapper">
            <div className="topCardSection">
            <div className="width-50 card cardHeight-200">
                <div className="cardInner cardInnerTopRow">
                    <PopulationChat/>
                </div>
            </div>
            <div className="width-25 card cardHeight-200">
            <div className="cardInner cardInnerTopRow">
                    <CurrenyChart/>
                </div>
            </div>
            <div className="width-25 card cardHeight-200">
            <div className="cardInner cardInnerTopRow">
                <NewsSection/>
                </div>
            </div>
            </div>
        </div>
    )
}
export default GraphCards;