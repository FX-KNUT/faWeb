import { useState } from "react";
import { store } from "./App.tsx";
import Pagination from "./Pagination";
import ProfilePage from "./ProfilePage";
import shine from "./res/image/shine.png";

const profileList = [
  {
    idx: 0,
    id: "1234567",
    name: "김김김",
    img: shine,
    start_date: "2021-01-01",
    end_date: "2021-12-31",
  },
  {
    idx: 1,
    id: "1234567",
    name: "s",
    img: shine,
    start_date: "2021-01-01",
    end_date: "2021-12-31",
  },
  {
    idx: 2,
    id: "1234567",
    name: "a",
    img: shine,
    start_date: "2021-01-01",
    end_date: "2021-12-31",
  },
  {
    idx: 3,
    id: "1234567",
    name: "r",
    img: shine,
    start_date: "2021-01-01",
    end_date: "2021-12-31",
  },
  {
    idx: 4,
    id: "1234567",
    name: "e",
    img: shine,
    start_date: "2021-01-01",
    end_date: "2021-12-31",
  },
  {
    idx: 5,
    id: "1234567",
    name: "w",
    img: shine,
    start_date: "2021-01-01",
    end_date: "2021-12-31",
  },
  {
    idx: 6,
    id: "1234567",
    name: "q",
    img: shine,
    start_date: "2021-01-01",
    end_date: "2021-12-31",
  },
];

const ProfileList = () => {
  store.dispatch({ type: { loc: "profile" } });

  // pagination 관련
  const maxProfileList = 6; // 한 페이지에서 보여줄 최대 profile 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  // const [loading, setLoading] = useState(false); // 서버에서 ProfileList를 가져올 때 loading을 하고 있냐 아니냐
  const indexOfLast = currentPage * maxProfileList; // 현재 페이지에서 있을 수 있는 마지막 index
  const indexOfFirst = indexOfLast - maxProfileList; // 현재 페이지에서 있을 수 있는 처음 index
  const currProfileList = (tmp) => {
    // 페이지에 맞는 Profile을 보여준다.
    const currProfile = tmp.slice(indexOfFirst, indexOfLast);
    return currProfile;
  };
  // arr의 map 함수 내 _는 ele 인자를 사용하지 않겠다는 것을
  // 암시적으로 나타내는 minify입니다. 일종의 convention이니,
  // 익혀두시면 다음에 다른 코드를 볼 때 또 보실 일이 있을 겁니다.

  return (
    <div className="main-profile-wrapper">
      {/* {loading && <div>loading...</div>} */}
      {/** 나중에 profileList를 받아올 때 대비 */}
      <div>
        <ProfilePage currProfileList={currProfileList(profileList)} />
      </div>
      <Pagination
        maxProfileList={maxProfileList}
        totalProfile={profileList.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProfileList;
