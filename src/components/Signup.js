import { useState } from "react";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { store } from "./App";

const Signup = () => {
  store.dispatch({ type: { loc: "signup" } });

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [img, setImg] = useState("");
  const [backgorundColor, setBackgroundColor] = useState("black");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onIDChange = (e) => {
    setId(e.target.value);
  };
  const onPwChange = (e) => {
    setPw(e.target.value);
  };
  const onBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };
  const onStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const onEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  const onImgChange = (e) => {
    setImg(e.target.value);
  };
  const onResetClick = () => {
    setId("");
    setName("");
    setStartDate("");
    setEndDate("");
    setBackgroundColor("black");
    setPw("");
    setImg("");
  };

  const backColor = {
    backgroundColor: backgorundColor,
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  var image;
  if (img !== "") {
    image = <img src={img} alt={img} className="signup_img" />;
  } else {
    image = <RiAccountCircleFill className="signup_img" />;
  }

  return (
    <div className="signup_wrapper">
      <form action="" method="post" onSubmit={onSubmit}>
        Nav 색:
        <input
          type="color"
          value={backgorundColor}
          onChange={onBackgroundColorChange}
        />
        <div>
          Image:
          <input
            type="file"
            className="signup_setimg"
            value={img}
            onChange={onImgChange}
          />
        </div>
        <div className="signup_form">
          <div className="profile_box">
            <div className="profile_color" style={backColor}></div>
            <div className="profile_content">
              <div className="form-floating mb-3 signup_name">
                <input
                  type="text"
                  className="form-control"
                  //   id="floatingInput"
                  placeholder="ID"
                  value={name}
                  onChange={onNameChange}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3 signup_id">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="ID"
                  value={id}
                  onChange={onIDChange}
                />
                <label htmlFor="floatingInput">ID</label>
              </div>
              <div className="form-floating mb-3 signup_pw">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={pw}
                  onChange={onPwChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="profile_date">
                <br />
                가입일:
                <input
                  type="date"
                  value={start_date}
                  onChange={onStartDateChange}
                  className="input_date"
                />
                <br />
                탈퇴일:
                <input
                  type="date"
                  value={end_date}
                  onChange={onEndDateChange}
                  className="input_date"
                />
              </div>
            </div>
            {image}
            <div className="signup_img"></div>
          </div>
        </div>
        <div className="button_wrapper">
          <button
            type="reset"
            className="btn btn-primary"
            onClick={onResetClick}
          >
            리셋
          </button>
          <button type="submit" className="btn btn-primary">
            로그인
          </button>
          <Link to="/login" className="btn btn-primary">
            돌아가기
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
