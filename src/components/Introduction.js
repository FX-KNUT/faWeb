import { store } from './App.tsx';

const Introduction = () => {
  store.dispatch({ type: { loc: 'introduction' } });

  return (
    <div className="main-introduction-wrapper">
      <div className="main-introduction-content">
        <div className="main-introduction-content-professor">
          <div className="main-introduction-content-professor-imgdiv">
            <div className="main-introduction-content-professor-imgdiv-innerdiv" />
          </div>
          <p className="main-introduction-content-professor-name">
            이광 교수님
          </p>
          <div className="main-introduction-content-professor-btndiv">
            <button className="main-introduction-content-professor-prevbtn">
              Prev
            </button>
            <button className="main-introduction-content-professor-nextbtn">
              Next
            </button>
          </div>
        </div>
        <div className="main-introduction-content-dept_software_wrapper">
          <div className="main-introduction-content-dept_software">
            소개입니다. 웹 스크래핑 등의 방법을 이용해서,
            https://www.ut.ac.kr/prog/professorInfo/9111202702/ceit/sub03_02_01/view.do?cntno=330&pageIndex=1
            <br />위 주소의 교수님 정보를 얻어올 수 있습니다. 정적으로 그냥
            적어놔도 됩니다만, 여러 스킬을 녹여내고 싶다면 시도해보세요. 쉬운
            부분은 아닐 겁니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
