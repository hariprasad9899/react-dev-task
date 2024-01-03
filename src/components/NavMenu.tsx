import { useNavigate } from "react-router";

interface NavMenuType {
    navMenuTitle: string;
    navMenuIcon: string
    navRoute:string
}

export function NavMenu({navMenuTitle, navMenuIcon, navRoute}:NavMenuType) {

    const navigate = useNavigate()
    const handleNavigation= () => {
        navigate(`/${navRoute}`)
    }   

    return (
        <div className='navmenu' onClick={handleNavigation}>
            <img src={navMenuIcon} alt="" className='navmenu-icon' />
            <div className='navmenu-title'>{navMenuTitle}</div>
        </div>
    )

}