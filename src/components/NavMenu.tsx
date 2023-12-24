interface NavMenuType {
    navMenuTitle: string;
    navMenuIcon: string
}

export function NavMenu({navMenuTitle, navMenuIcon}:NavMenuType) {

    return (
        <div className='navmenu'>
            <img src={navMenuIcon} alt="" className='navmenu-icon' />
            <div className='navmenu-title'>{navMenuTitle}</div>
        </div>
    )

}