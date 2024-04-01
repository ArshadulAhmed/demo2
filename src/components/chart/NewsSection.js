import React from 'react';

import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";

export function NewsSection() {

    return (
        <div className="populationChartWrapper doughnutChart newsSection">
            <div className="topBlock">
                <p>In recent posts</p>
            </div>
            <div className='newsSectionDiv'>
                <div className='imageSection'>
                    <FaRegHeart />
                </div>
                <div className='newsSectionMiddle'>
                    <div className='head'>
                        <p>Carbon cell <span>@carbonCell 21hrs</span></p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus</p>

            
                    <div className='footer'>
                        <div className='footerInner'>
                            <FaRegCommentDots />
                            <p>19</p>
                        </div>
                        <div className='footerInner'>
                            <MdOutlineShare />
                            <p>48</p>
                        </div>
                        <div className='footerInner'>
                            <FaRegHeart />
                            <p>482</p>
                        </div>
                        <div className='footerInner'>
                            <AiOutlineUpload />
                            <p>30</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomBlock">
                <p className="buttonPrimary">Follow us on X</p>
            </div>
        </div>
    )

}