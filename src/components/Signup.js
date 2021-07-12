import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");

  const onIDChange = (e) => {
    setId(e.target.value);
  };
  const onPwChange = (e) => {
    setPw(e.target.value);
  };
  const onResetClick = () => {
    setId("");
    setPw("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup_wrapper">
      <form action="" method="post" onSubmit={onSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="ID"
            value={id}
            onChange={onIDChange}
          />
          <label htmlFor="floatingInput">ID</label>
        </div>
        <div className="form-floating mb-3">
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
        <div className="button_wrapper">
          <button
            type="reset"
            className="btn btn-primary"
            onClick={onResetClick}
          >
            리셋
          </button>
          <button type="submit" className="btn btn-primary">
            회원가입
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
