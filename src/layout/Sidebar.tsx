import Logo from '../assets/svg/Logo.svg';
import Profile from '../assets/svg/Account.svg';
import HideNavIcon from '../assets/svg/HideMenu.svg';
import { NavMenu } from '../components/NavMenu';
import "../styles/sidebar.css"
import { navMenuData } from '../data/navMenuData';
import { nanoid } from 'nanoid';
import AddIcon from "../assets/svg/AddIcon.svg"
import { useState } from 'react';

interface SidebarType {
    toggleState: boolean;
    handleToggle: () => void
}

export function Sidebar({toggleState,handleToggle}:SidebarType) {

    const [activeMenu, setActiveMenu] = useState("recomendations")

    const updateActiveMenu = (menuName:string) => {
        setActiveMenu(menuName)
    }

    return (
        <div className={`sidebar-layout ${toggleState ? 'sidebar-hidden' : ''}`}>
            
            <div className="sidebar-header menu-nav">

                <div className="header-info">
                    <img className='logo-img' alt='' src={Logo} />
                    <picture className='profile-img'>
                        <img src={Profile} alt="" className='' />
                    </picture>
                </div>

                <div className="sidebar-toggle">

                    <div className="sidenav-btn-wrapper toggle-close" onClick={handleToggle}>
                        <img src={HideNavIcon} className='side-nav-btn-img' alt="" />
                        <img src={HideNavIcon} className='side-nav-btn-img' alt="" />
                    </div>

                    <div className="sidenav-btn-wrapper toggle-open" onClick={handleToggle}>
                        <img src={HideNavIcon} className='side-nav-btn-img' alt="" />
                        <img src={HideNavIcon} className='side-nav-btn-img' alt="" />
                    </div>

                </div>

            </div>

            <div className='sidebar-menu'>

                {navMenuData.length > 0 && navMenuData.map((menuItemData) => {
                    return (
                        <NavMenu 
                            key={nanoid()} 
                            navMenuTitle = {menuItemData?.navMenuTitle} 
                            navRoute={menuItemData.navRoute} 
                            navMenuIcon={menuItemData?.navMenuImg} 
                            activeMenu = {activeMenu}
                            updateActiveMenu = {updateActiveMenu}
                        />
                    )
                })}
                
            </div>

            <div className="sidebar-add-btn">
                    <button className='btn untoggled-btn'>
                        <img src={AddIcon} alt="" />
                        Add data
                    </button>
                    <button className='btn toggled-btn' title='Add data'>
                        <img src={AddIcon} alt="" />
                    </button>
            </div>
        </div>
    )

}