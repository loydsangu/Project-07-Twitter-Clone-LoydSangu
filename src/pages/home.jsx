import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor';
import Tweet from '../components/header/tweets';

function Home() {
  return (
    <main className="timeline">
     <Header />
     <TweetEditor />
     <Tweet />
    </main>
  );
}

export default Home;  