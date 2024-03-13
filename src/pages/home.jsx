import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor';
import Tweet from '../components/header/tweets';
import Sidebar from '../components/sidebar';
import Trends from '../components/trends';

function Home() {
  return (
    <>
    <Sidebar/>
    <main className="timeline">
     <Header />
     <TweetEditor />
     <Tweet />
    </main>
    <Trends />
    </>
    
  );
}

export default Home;  