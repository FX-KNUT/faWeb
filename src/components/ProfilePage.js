// 최대 6개의 Profile만 보여주는 페이지
import Profile from "./Profile";

const ProfilePage = ({ currProfileList, loading }) => {
  return (
    <div className="main-profile-content">
      {currProfileList.map((profile) => (
        <Profile profile={profile} />
      ))}
    </div>
  );
};

export default ProfilePage;
