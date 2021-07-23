// 각각의 Profile에 대한 컴포넌트

const Profile = ({ profile }) => {
  const { color, id, name, img, start_date, end_date } = profile;

  return (
    <div className="profile_box">
      <div className="profile_color" style={color}></div>
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
