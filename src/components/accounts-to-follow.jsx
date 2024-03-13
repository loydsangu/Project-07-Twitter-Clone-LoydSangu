export default function AccountsToFollow({ sourceImage, name, handle }) {
    return (
        <div className="accounts-to-follow">
            
            <div className="account">
                <div className="avatar-accounts-to-follow">
                    <img src={sourceImage} alt="" />
                </div>
                
                <div>
                    <div className="account-name">
                        <p>{name}</p>
                        <img src="public/img/Verified.svg" alt="" />
                    </div>
                    <div className="time">
                        <p>{handle}</p>
                    </div>
                </div>
            </div>
            <button>Follow</button>

           
        </div>
        
    )
}