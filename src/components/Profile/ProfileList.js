import { useEffect, useState } from "react";
import { store } from "../App.tsx";
import ProfilePagination from "./ProfilePagination";
import ProfilePage from "./ProfilePage";
import axios from "axios";
import { SERVERPORT } from "../Constants";

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

  const [profileList, setProfileList] = useState([]);
  const [loading, setLoading] = useState(false);

  // axios
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:${SERVERPORT}/profile`);
        setProfileList(res.data);
      } catch (e) {
        console.error(e);
      }
      setLoading(true);
    };
    fetchProfile();
  }, [profileList]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!profileList) {
    return null;
  }

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
      <ProfilePagination
        maxProfileList={maxProfileList}
        totalProfile={profileList.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProfileList;
