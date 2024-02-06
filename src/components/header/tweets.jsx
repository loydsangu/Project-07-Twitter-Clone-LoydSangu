import React from 'react';
import datas from '../data/data.json';

function Tweet() {
  const tweets= datas.tweets
  console.log(tweets);

  return (

    <div className='tweets'>
      {
        tweets.map(
          (tweet, index )=> (
            <div className="tweet" key={index}> 
              <div className="tweet-avatar">
                <img src={tweet.sourceProfilePhoto} alt="" />
              </div>
              <div className="tweet-content">
                <div className="tweet-body">
                  <div className="tweet-title">
                    <div className="tweet-title-author">
                      <p>{tweet.author} </p>
                    </div>
                    <div className="tweet-title-details"></div>
                    <div className="tweet-title-details">{tweet.username}</div>
                    <div className="tweet-title-details">.</div>
                    <div className="tweet-title-details"> {tweet.datePublication} </div>
                  </div>
                  <div className="tweet-text">
                    <p> {tweet.textContent} </p>
                  </div>
                  <div className="tweet-image">
                  <img src={tweet.sourceImageTweet} alt="" />
                  </div>
                </div>
                <div className="tweet-actions">
                  <div className="tweet-action">
                    <img src="public/img/Reply.svg" alt="" />
                    <p> {tweet.valueReply} </p>
                  </div>
                  <div className="tweet-action">
                    <img src="public/img/Retweet.svg" alt="" />
                    <p> {tweet.valueReposter} </p>
                  </div>
                  <div className="tweet-action">
                    <img src="public/img/Like.svg" alt="" />
                    <p> {tweet.valueLike} </p>
                  </div>
                  <div className="tweet-action">
                    <img src="public/img/share.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          )
        )
      }
  
    </div>
  );
}

export default Tweet;