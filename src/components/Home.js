import { store } from './App.tsx';

const Home = () => {
  store.dispatch({ type: { loc: 'home' } });

  return (
    <div className="main-home-wrapper">
      <div className="main-home-header">
        <pre>
          <h2>안녕하십니까!</h2>
          <h3>한국교통대학교 소프트웨어학과</h3>
          <h3>웹 어플리케이션 동아리</h3>
          <h3>f(x)입니다.</h3>
        </pre>
      </div>
      <div className="main-home-content">
        <pre>
          <h2>하루를 잘 보내고 계신가요?</h2>
          <h3>날씨가 많이 더워지고 있습니다.</h3>
          <h4>감기 조심하세요.</h4>
        </pre>
      </div>
    </div>
  );
};

export default Home;
