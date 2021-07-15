import React, { useState } from 'react'
import Menu from '../img/menu.png';
import { Link } from 'react-router-dom';
import *as CgIcons from "react-icons/cg";
import *as AicIcons from "react-icons/ai";
import { Sidebar } from './Sidebar';
import { IconContext } from "react-icons";

const ButtonMenu = (props) => {
    const [sidebar, setsidebar] = useState(false)
    const showSidebar = () => setsidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: "black" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <CgIcons.CgMenuGridR size="55px" onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-item " onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AicIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            {Sidebar.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            <span style={{ color: 'white' }}>{item.tittle}</span>
                                            <span className="icon ml-3" >{item.icon}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default ButtonMenu
