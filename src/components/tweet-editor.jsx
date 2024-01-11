import React from 'react';

function  TweetEditor()  {
  return (
    <div className="tweet-editor">
      <div className="avatar">
        <img src={"/img/profile-photo.png"} alt="" />
      </div>
      <div className='tweet-editor-form'>
        <input className="tweet-editor-input" type="text" placeholder = "What's shappening?" />
      </div>
       <div className="tweet-editor-buttons">
         <div className="tweet-editor-actions">
           <img src="/img/Media.svg" ></img>
           <img src="/img/Gif.svg" ></img>
           <img src="/img/Poll.png" ></img>
           <img src="/img/Emoji.svg" ></img>
           <img src="/img/Schedule.svg" ></img>
         </div>
       </div>
      <button className='button'>tweet</button>
      
      </div>

  );
};

export default TweetEditor;