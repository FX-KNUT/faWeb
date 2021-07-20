// 각각의 Profile에 대한 컴포넌트

const nav_color = [
  "#d50000",
  "#c51162",
  "#aa00ff",
  "#6200ea",
  "#304ffe",
  "#2962ff",
  "#0091ea",
  "#00b8d4",
  "#00bfa5",
  "#00c853",
  "#64dd17",
  "#aeea00",
  "#ffd600",
  "#ffab00",
  "#ff6d00",
];

const Profile = ({ profile }) => {
  const { idx, id, name, img, start_date, end_date } = profile;
  const backgroundColor = {
    backgroundColor: nav_color[idx % nav_color.length],
  };
  return (
    <div className="profile_box">
      <div className="profile_color" style={backgroundColor}></div>
      <div className="profile_content">
        <img src={img} alt={img} className="profile_img" />
        <h2 className="profile_name">{name}</h2>({id})
        <div className="profile_date">
          <br />
          가입일: {start_date}
          <br />
          탈퇴일: {end_date}
        </div>
      </div>
    </div>
  );
};

export default Profile;
