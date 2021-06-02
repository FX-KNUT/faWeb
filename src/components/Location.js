import { store } from './App';

const Location = () => {
  store.dispatch({ type: { loc: 'location' } });

  return (
    <div className="main-location-wrapper">
      <div className="main-location-content">
        <p>장소입니다.</p>
      </div>
    </div>
  );
};

export default Location;
