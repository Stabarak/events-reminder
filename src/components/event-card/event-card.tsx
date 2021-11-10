import EventList from '../event-list/event-list';
import './event-card.scss';

function EventCard() {
  return (
    <section className='card'>
      <h4 className='tc title'> {0} Events Today</h4>
      <div className='events-list'>
        <EventList />
        <EventList />
      </div>
      <button className='btn'>Clear All</button>
    </section>
  );
}

export default EventCard;
