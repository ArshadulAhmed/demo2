import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import  {popoulationData}  from "../../redux/reducers/populationSlice";


function GraphCards(props) {
    const mainState = useSelector((state)=> state.population);
    const dispatch = useDispatch()
    console.log("1111111111111111111111", mainState)
 
    useEffect(()=>{
        dispatch(popoulationData())
    },[])

    return(
        <div className="homePageWrapper">
            <div className="topCardSection">
            <div className="width-50 card cardHeight-200">
                <div className="cardInner">
                <h1>Test</h1>
                </div>
            </div>
            <div className="width-25 card cardHeight-200">
            <div className="cardInner">
                <h1>Test</h1>
                </div>
            </div>
            <div className="width-25 card cardHeight-200">
            <div className="cardInner">
                <h1>Test</h1>
                </div>
            </div>
            </div>
        </div>
    )
}
export default GraphCards;