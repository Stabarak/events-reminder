import './event-list.scss';

function EventList() {
  return (
    <div className='list'>
      <img
        src='https://lh3.googleusercontent.com/ogw/ADea4I6VnC7wNm2h8ImesNnFfBElXjz0T0fjy2ij-jts8PE=s83-c-mo'
        alt=''
        className='avatar'
      />
      <div className='event-info'>
        <div className='name'>Syed Tabarak Ulla</div>
        <div className='event-name'>Birthday</div>
        <div className='event-age'>25</div>
      </div>
    </div>
  );
}

export default EventList;
