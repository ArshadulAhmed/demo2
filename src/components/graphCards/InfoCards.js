import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import  {currencyData}  from "../../redux/reducers/currencySlice";

function InfoCards(props) {
    const mainState = useSelector((state)=> state.currency.data);
    const dispatch = useDispatch()
    console.log("currencycurrencycurrency", mainState)
 
    useEffect(()=>{
        dispatch(currencyData())
    },[])

    return(
        <div className="homePageWrapper">
            <div className="topCardSection">
            <div className="width-20 card cardHeight">
                <div className="cardInner">
                <h1>Test</h1>
                </div>
            </div>
            <div className="width-20 card cardHeight">
            <div className="cardInner">
                <h1>Test</h1>
                </div>
            </div>
            <div className="width-20 card cardHeight">
            <div className="cardInner">
                <h1>Test</h1>
                </div>
            </div>
            <div className="width-20 card cardHeight">
            <div className="cardInner">
                <h1>Test</h1>
                </div>
            </div>            <div className="width-20 card cardHeight">
            <div className="cardInner">
                <h1>Test</h1>
                </div>
            </div>
            
            </div>
        </div>
    )
}
export default InfoCards;