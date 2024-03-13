import TrendsItem from "./trends-item";
import AccountsToFollow from "./accounts-to-follow";

function Trends() {
    return (
        <>
            <div className="trends">
                <div className="input-search">
                    <img src="public/img/Search.svg" alt="" />

                    <input type="text" placeholder="Search Twitter" />
                </div>
                <div className="trend-suggestion">
                    <div className="trend-suggestion-title">
                        <h2>trends for you</h2>
                        <img src="public/img/Frame 19.svg" alt="" />
                    </div>
                    <TrendsItem />
                    <TrendsItem />
                    <TrendsItem />
                    <TrendsItem />

                </div>
                <div className="follow-suggestion">
                    <div className="trend-suggestion-title">
                        <h2>Who to follow</h2>
                    </div>

                    <AccountsToFollow sourceImage="public/img/image 1 (1).svg" name="The New York Times" handle="@nytimes" />
                    <AccountsToFollow sourceImage="public/tweet-profile-photo.png" name="CNN" handle="@CNN" />
                    <AccountsToFollow sourceImage="public/img/logoTwiiter.png" name="Twitter" handle="@Twitter" />
                    <p className="more-info"> Show more </p>
            
                </div>

                <div className="to-know-more">
                <p>Terms of Service Privacy Policy   Cookie Policy Imprint Ads  info More ... 2021 Twitter , inc </p>
                </div>

            </div>
        </>
    )

}

export default Trends;