import { useNavigate } from "react-router";

interface NavMenuType {
    navMenuTitle: string;
    navMenuIcon: string
    navRoute:string
    activeMenu:string
    updateActiveMenu: (menuName:string) => void
}

export function NavMenu(props:NavMenuType) {

    const {navMenuTitle, navMenuIcon, navRoute, activeMenu, updateActiveMenu} = props;

    const navigate = useNavigate()
    
    const handleNavigation= () => {
        navigate(`/${navRoute}`)
        updateActiveMenu(navRoute)
    }   

    return (
        <div className={`navmenu ${activeMenu === navRoute ? "navmenu-active" : ""}`} onClick={handleNavigation}>
            <img src={navMenuIcon} alt="" className='navmenu-icon' />
            <div className='navmenu-title'>{navMenuTitle}</div>
        </div>
    )

}