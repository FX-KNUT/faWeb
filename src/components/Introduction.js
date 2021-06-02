import { store } from './App.tsx';

const Introduction = () => {
  store.dispatch({ type: { loc: 'introduction' } });

  return (
    <div className="main-introduction-wrapper">
      <div className="main-introduction-content">
        <p>소개입니다.</p>
      </div>
    </div>
  );
};

export default Introduction;
