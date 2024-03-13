import NavItem from './nav-item';

function Sidebar() {

    return(
        <div className="sidebar">
            <div className="logo">
                <img src="public/img/Twitter.svg" alt="nav-icon" />
            </div>

            <nav className="sidebar-nav">
                <NavItem imageSource={"public/img/Home-Fill.svg"} text={"Home"}/>
                <NavItem imageSource={"public/img/Explore.svg"} text={"Explore"}/>
                <NavItem imageSource={"public/img/Notifications.svg"} text={"Notifications"}/>
                <NavItem imageSource={"public/img/Messages.svg"} text={"Messages"}/>
                <NavItem imageSource={"public/img/Bookmarks.svg"} text={"Bookmarks"}/>
                <NavItem imageSource={"public/img/Lists.svg"} text={"Lists"}/>
                <NavItem imageSource={"public/img/Profile.svg"} text={"Profile"}/>
                <NavItem imageSource={"public/img/More.svg"} text={"More"}/>
            </nav>

            <button className="buttons"> Tweet</button>
            
        </div>
    )
}




export default Sidebar;

