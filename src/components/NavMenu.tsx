import { NavLink } from "react-router-dom";

interface NavMenuType {
    navMenuTitle: string;
    navMenuIcon: string
    navRoute:string
}

// renders the single nav component menu with active action management 
export function NavMenu(props:NavMenuType) {

    const {navMenuTitle, navMenuIcon, navRoute } = props;

    return (
        <NavLink to={`/${navRoute}`} className={`navmenu`}>
            <img src={navMenuIcon} alt="" className='navmenu-icon' />
            <div className='navmenu-title'>{navMenuTitle}</div>
        </NavLink>
    )

}