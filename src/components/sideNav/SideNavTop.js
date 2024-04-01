import React from "react";
import {useLocation} from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { TbHome } from "react-icons/tb";

import { GoOrganization } from "react-icons/go";
import { FaCodepen } from "react-icons/fa6";
import logo from '../../assets/image/logo2.png'
import { AiOutlineTrademark } from "react-icons/ai";
import { VscHistory } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";
import { Link } from "react-router-dom";

function SideNavTop({isOpen, handleToggleMenu}) {

    const {pathname} = useLocation()

    return (
        <div className="sideNavTopWrapper">
            <div className="logoBlock">
                <div className="logoBlockTop">
                    {isOpen && <Link to='/'><img src={logo} alt='Carbon cell logo' className="logo" /></Link>}
                    <MdMenu className="menuIcon" onClick={handleToggleMenu}/>
                </div>
                {
                    isOpen && (
                        <div className="searchBlock">
                    <input type="text" placeholder="search" />
                </div>
                    )
                }
            </div>
            <div className="sideNavDynamicMenuWrapper commonMenuWrapper">
            <Link to='/' className={pathname ==='/'? 'active': ''}>
                <div className="menuWrapper">
                    
                    <div className="iconBlock"><TbHome /></div>
                    {isOpen && <p>Home</p>}
                  
                </div>
                </Link>
                <Link to='/organization' className={pathname ==='/organization'? 'active': ''}>
                <div className="menuWrapper">
                    <div className="iconBlock"><GoOrganization /></div>
                    {isOpen && <p>Organization</p>}
                </div>
                </Link>

                <Link to='/assets' className={pathname ==='/assets'? 'active': ''}>
                <div className="menuWrapper">
                    <div className="iconBlock"><FaCodepen /></div>
                    {isOpen && <p>Assets</p>}
                </div>
                </Link>
                <Link to='/trade' className={pathname ==='/trade'? 'active': ''}>
                <div className="menuWrapper">
                    <div className="iconBlock"><AiOutlineTrademark /></div>
                    {isOpen && <p>Trade</p>}
                </div>
                </Link>
                <Link to='/history' className={pathname ==='/history'? 'active': ''}>
                <div className="menuWrapper">
                    <div className="iconBlock"><VscHistory /></div>
                    {isOpen && <p>History</p>}
                </div>
                </Link>
                <Link to='/wallet' className={pathname ==='/wallet'? 'active': ''}>
                <div className="menuWrapper">
                    <div className="iconBlock"><CiWallet /></div>
                    {isOpen && <p>Wallet</p>}
                </div>
                </Link>
            </div>
        </div>
    )
}

export default SideNavTop;