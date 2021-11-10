import React from 'react';
import './home.scss';
import EventCard from '../event-card/event-card';

function Home() {
  return (
    <main className='container center'>
      <EventCard />
    </main>
  );
}

export default Home;
