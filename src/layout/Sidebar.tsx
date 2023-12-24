import Logo from '../assets/svg/Logo.svg';
import Profile from '../assets/svg/Account.svg';
import HideNavIcon from '../assets/svg/HideMenu.svg';
import { NavMenu } from '../components/NavMenu';
import "../styles/sideBar.css"
import { navMenuData } from '../data/navMenuData';
import { nanoid } from 'nanoid';

export function Sidebar() {

    return (
        <div className="sidebar-layout">
            
            <div className="side-nav-header-bar menu-nav">
                
                <div className="header-info">
                    <img className='side-nav-logo-img' alt='' src={Logo} />
                    <img src={Profile} alt="" className='side-nav-profile-img' />
                </div>

                <div className="sidenav-btn">
                    <img src={HideNavIcon} className='side-nav-btn-img' alt="" />
                    <img src={HideNavIcon} className='side-nav-btn-img' alt="" />
                </div>
               

            </div>

            <div className='side-nav-menu-nav'>
                {navMenuData.length > 0 && navMenuData.map((menuItemData) => {
                    return <NavMenu key={nanoid()} navMenuTitle = {menuItemData?.navMenuTitle} navMenuIcon={menuItemData?.navMenuImg} />
                })}
            </div>

        </div>
    )

}