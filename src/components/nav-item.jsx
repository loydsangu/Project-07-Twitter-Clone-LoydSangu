function NavItem({imageSource, text}) {

    return (
        <div className="nav-item">

            <img src={imageSource} alt="" className="nav-icon" />
            <span className="trends-text">{text}</span>

        </div>
    )
    
}

export default NavItem;