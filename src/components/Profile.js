import { store } from "./App.tsx";
import Pro from "./Pro";
import shine from "./res/image/shine.png";

const proList = [
  {
    id: "1234567",
    name: "김김김",
    img: shine,
    start_date: "2021-01-01",
    end_date: "2021-12-31",
  },
];

const Profile = () => {
  store.dispatch({ type: { loc: "profile" } });

  // let page = 1;
  // let arr = [1, 2, 3, 4, 5, 6];

  // arr의 map 함수 내 _는 ele 인자를 사용하지 않겠다는 것을
  // 암시적으로 나타내는 minify입니다. 일종의 convention이니,
  // 익혀두시면 다음에 다른 코드를 볼 때 또 보실 일이 있을 겁니다.

  return (
    <div className="main-profile-wrapper">
      <div className="main-profile-content">
        {proList.map((profile) => (
          <Pro profile={profile} />
        ))}
      </div>
      <div className="main-profile-pagination">
        <button className="main-profile-pagination-start">처음으로</button>
        <ul className="main-profile-pagination-ul">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <button className="main-profile-pagination-end">끝으로</button>
      </div>
    </div>
  );
};

export default Profile;
