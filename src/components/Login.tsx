import { useState } from "react";
import { Link } from "react-router-dom";
import { store } from "./App";
import { SERVERURL, SERVERPORT } from "./Constants";
import axios from "axios";

// 백엔드와 교환할 데이터에 대한 정보를 인터페이스에 즉각 메모하세요.
// 이것 또한 협업과정에서 타입스크립트가 가져다 주는 큰 장점들 중 하나입니다.
interface User {
  // 받는 유저 정보의 스키마
  id: string;
  pw: string;
}

interface UserDTO {
  // 보내는 유저 정보의 스키마
  id: string;
  pw: string;
}

const Login = (): JSX.Element => {
  store.dispatch({ type: { loc: "login", loggedIn: "" } });

  // destructuring에 따른 Typing 방법
  let [id, setId]: [id: string, setId: Function] = useState("");
  let [pw, setPw]: [pw: string, setPw: Function] = useState("");

  const onIDChange = (e: any) => {
    setId(e.target.value);
  };
  const onPwChange = (e: any) => {
    setPw(e.target.value);
  };
  const onResetClick = () => {
    setId("");
    setPw("");
  };

  // 객체의 타입을 다 외울 필요 없습니다.
  // 아래의 onIDChange를 예로 들면, onIDChange 이벤트가 걸려있는
  // DOM에 마우스를 올려 해당 객체의 타입이 무엇인지 확인하면 쉽게 알 수 있습니다.

  // axios를 이렇게 사용하는 방법도 좋지만,
  // axios를 좀 더 날렵하게 custom하는 방법도 요긴하게 사용될 수 있습니다.
  // 소규모 프로젝트에선 상관 없지만, 큰 프로젝트에선 DRY한 코드를 위해
  // axios를 Hook처럼 커스텀하여 사용할 수 있습니다.
  const requsetUserInfo = async (UserDTO: UserDTO) => {
    // axios를 하단 코드처럼 사용하지 않고
    // axios({ method: 'post', ... }) 처럼 사용해도 좋습니다.
    const res: User = await axios.post(`${SERVERURL}:${SERVERPORT}`, {
      UserDTO,
    });
    return res;
  };

  // 패키지에 axios 설치 되어 있습니다. axios 사용하세요.
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const UserDTO: UserDTO = {
      id,
      pw,
    };
    const res = requsetUserInfo(UserDTO);
    console.log(res);
  };

  return (
    <div className="login_wrapper">
      <form action="" method="post" onSubmit={onSubmit}>
        <div className="form-floating mb-3">
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
            로그인
          </button>
          <Link to="/signup" className="btn btn-primary">
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
