import { Link } from 'react-router-dom';
import *as CgIcons from "react-icons/cg";
import *as AicIcons from "react-icons/ai";
import *as VscIcons from "react-icons/vsc"
import *as BiIcons from "react-icons/bi"
export const Sidebar = [
    {
        tittle: "Profile",
        path: "/",
        icon: <VscIcons.VscAccount />,
        cName: 'nav-text'
    },
    {
        tittle: "Calender",
        path: "/Calender",
        icon: <AicIcons.AiFillCalendar />,
        cName: 'nav-text'
    },
    {
        tittle: "Settings",
        path: "/Settings",
        icon: <AicIcons.AiFillSetting />,
        cName: 'nav-text'
    },
    {
        tittle: "Logout",
        path: "/Logout",
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text'
    },
]