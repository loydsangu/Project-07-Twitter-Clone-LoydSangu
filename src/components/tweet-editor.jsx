import React from 'react';


function  TweetEditor()  {
  return (
    <div className="tweet-editor">
      <div className="avatar">
        <img src={"/img/profile-photo.png"} alt="" />
      </div>
      <div className="tweet-editor-form">
        <input type="text" className="tweet-editor-input" placeholder="What's happening?" />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src="public/img/Media.svg" alt="" />
            <img src="public/img/Gif.svg" alt="" />
            <img src="public/img/Poll.png" alt="" />
            <img src="public/img/Emoji.svg" alt="" />
            <img src="public/img/Schedule.svg" alt="" />
          </div>
          <button className="button" type='submit'>Tweet</button>
        </div>
      </div>  
    </div>

  );
};

export default TweetEditor;