import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { LiaJournalWhillsSolid } from "react-icons/lia";
import { BsScrewdriver } from "react-icons/bs";
import { SiWikidotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

import '../../assets/scss/infoCards.scss'

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
             <p className="heading">Assets</p>
            <div className="topCardSection">
            <div className="width-20 card cardHeight">
                <div className="cardInner">
                    <div className="cardInnerWrapper color1">
                        <div className="header">
                            <LiaJournalWhillsSolid/>
                            <p>NBST</p>
                        </div>
                        <p className="midHeading">Nature based solution</p>
                        <div className="amountBlock">
                            <p>0.72 $</p>
                            <p>+15%</p>
                        </div>
                        <div className="infoBlock">
                        <MdOutlineInfo />
                        <p>Trade</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="width-20 card cardHeight">
            <div className="cardInner">
                    <div className="cardInnerWrapper color1">
                        <div className="header">
                            <BsScrewdriver/>
                            <p>NBST</p>
                        </div>
                        <p className="midHeading">Nature based solution</p>
                        <div className="amountBlock">
                            <p>0.72 $</p>
                            <p>+15%</p>
                        </div>
                        <div className="infoBlock">
                        <MdOutlineInfo />
                        <p>Trade</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="width-20 card cardHeight">
            <div className="cardInner">
                    <div className="cardInnerWrapper color1">
                        <div className="header">
                            <SiWikidotjs/>
                            <p>NBST</p>
                        </div>
                        <p className="midHeading">Nature based solution</p>
                        <div className="amountBlock">
                            <p>0.72 $</p>
                            <p>+15%</p>
                        </div>
                        <div className="infoBlock">
                        <MdOutlineInfo />
                        <p>Trade</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="width-20 card cardHeight">
            <div className="cardInner">
                    <div className="cardInnerWrapper color1">
                        <div className="header">
                            <FaReact/>
                            <p>NBST</p>
                        </div>
                        <p className="midHeading">Nature based solution</p>
                        <div className="amountBlock">
                            <p>0.72 $</p>
                            <p>+15%</p>
                        </div>
                        <div className="infoBlock">
                        <MdOutlineInfo />
                        <p>Trade</p>
                        </div>
                    </div>
                </div>
            </div>            <div className="width-20 card cardHeight">
            <div className="cardInner">
                    <div className="cardInnerWrapper color1">
                        <div className="header">
                            <FaJava/>
                            <p>NBST</p>
                        </div>
                        <p className="midHeading">Nature based solution</p>
                        <div className="amountBlock">
                            <p>0.72 $</p>
                            <p>+15%</p>
                        </div>
                        <div className="infoBlock">
                        <MdOutlineInfo />
                        <p>Trade</p>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    )
}
export default InfoCards;