// 최대 6개의 Profile만 보여주는 페이지
import Profile from "./Profile";

const ProfilePage = ({ currProfileList }) => {
  return (
    <div className="main-profile-content">
      {currProfileList.map((profile) => (
        <Profile profile={profile} key={profile.idx} />
      ))}
    </div>
  );
};

export default ProfilePage;
