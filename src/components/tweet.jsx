import React from 'react';

function Tweet () {
  return (
   <div className="tweet">
      <div className="avatar"><img src="/img/public/tweet-profile-photo.png"></img></div>
      <div className="tweet-title-author"><span>CNN</span><img src="/img/public/image 1.svg"></img></div>
      <div className="tweet-text">
        <span>President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and stell as a "major breakthrough that would serve to both strengthen the US stell industry and combat the globale climate crisis.</span>
        <div className="tweet-action">
          <img src="/img/Reply.svg"></img>
          <img src="/img/Retweet.svg"></img>
          <img src="/img/React.svg"></img>
          <img src="/img/Tweet-Replies(1).svg"></img>
        </div>
      </div>
   </div>
  );
}

export default Tweet;


//

