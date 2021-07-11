import { useState } from "react";
import { store } from "./App";
// import { SERVERURL, SERVERPORT } from './Constants';
// import axios from 'axios';

// 백엔드와 교환할 데이터에 대한 정보를 인터페이스에 즉각 메모하세요.
// 이것 또한 협업과정에서 타입스크립트가 가져다 주는 큰 장점들 중 하나입니다.
// interface User { // 받는 유저 정보의 스키마

// }

// interface UserDTO { // 보내는 유저 정보의 스키마

// }

const allUsers = [
  {
    userId: "min",
    userPw: "1234",
  },
  {
    userId: "kim",
    userPw: "1234",
  },
  {
    userId: "park",
    userPw: "1234",
  },
];

const Login = (): JSX.Element => {
  // destructuring에 따른 Typing 방법
  let [id, setId]: [id: string, setId: Function] = useState("");
  let [pw, setPw]: [pw: string, setPw: Function] = useState("");

  // Union Type, | 를 사용하여 이 타입 중 하나일 것임을 명시
  // HTMLElement의 경우 로딩 시점에 따라 null로 인식될 수 있으므로 null까지 포함해야 함
  const modal: HTMLElement | null = document.querySelector("#modal");
  const login: HTMLElement | null = document.querySelector("#login");

  // 굳이 Inline Style을 지정한다면 그나마 좀 더 괜찮게 하는 방법입니다.
  const resetBtnStyle = {
    // 이런 객체엔 Typing하지 않아도 됩니다.
    color: "white",
    background: "blueviolet",
    width: "5rem",
    padding: ".125rem .5rem",
    border: "1px solid white",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
  };

  const submitBtnStyle = {
    // React Native에서 이 방식을 사용합니다.
    color: "white",
    background: "purple",
    width: "5rem",
    padding: ".125rem .875rem",
    border: "1px solid purple",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
  };

  const xBtnStyle = {
    color: "white",
    background: "#1E1F21",
    padding: ".125rem .5rem",
    border: "1px solid silver",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
  };

  // 객체의 타입을 다 외울 필요 없습니다.
  // 아래의 onIDChange를 예로 들면, onIDChange 이벤트가 걸려있는
  // DOM에 마우스를 올려 해당 객체의 타입이 무엇인지 확인하면 쉽게 알 수 있습니다.

  const onIDChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setId(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPw(e.target.value);
  };

  const onXClicked = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setId("");
    setPw("");
    modal?.classList.toggle("show");
    login?.classList.toggle("show");
  };

  const onResetClicked = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setId("");
    setPw("");
  };

  // axios를 이렇게 사용하는 방법도 좋지만,
  // axios를 좀 더 날렵하게 custom하는 방법도 요긴하게 사용될 수 있습니다.
  // 소규모 프로젝트에선 상관 없지만, 큰 프로젝트에선 DRY한 코드를 위해
  // axios를 Hook처럼 커스텀하여 사용할 수 있습니다.
  // const requsetUserInfo = async (UserDTO: UserDTO) => {
  //     // axios를 하단 코드처럼 사용하지 않고
  //     // axios({ method: 'post', ... }) 처럼 사용해도 좋습니다.
  //     const res: User =
  //         await axios.get(`${SERVERURL}:${SERVERPORT}`, UserDTO);
  //     return res;
  // }

  // 패키지에 axios 설치 되어 있습니다. axios 사용하세요.
  // const onSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
  //     e.preventDefault();
  //     const UserDTO: UserDTO = {
  //         id,
  //         pw
  //     }
  //     const res = requsetUserInfo(UserDTO);
  //     console.log(res);
  // }

  // 원래 submit을 하면 id와 pw이 서버로 전송됨. 서버에서 일치하는지 판단 후 res를 줌.
  const onSubmit = () => {
    // axios 역할을 하는 코드
    const a = allUsers.filter(
      (user) => user.userId === id && user.userPw === pw
    );
    if (a.length !== 0) {
      // redux의 state의 loggedIn을 true로 바꿔야 됨.
      store.dispatch({ type: { loc: "", loggedIn: "true" } });
      console.log(store.getState().loc);
      console.log(store.getState().loggedIn);
    } else {
      console.log("failed");
    }

    // 모달을 닫는 코드.
    modal?.classList.toggle("show");
    login?.classList.toggle("show");
  };

  return (
    <div id="login-wrapper">
      <form action="" method="post" onSubmit={onSubmit}>
        <p id="login-header" className="login-p">
          로그인
        </p>
        <button onClick={onXClicked} style={xBtnStyle} id="login-X_Btn">
          X
        </button>
        <p id="login-id" className="login-p">
          ID
        </p>
        <input
          type="text"
          value={id}
          className="login-input"
          onChange={onIDChange}
        />
        <p id="login-pw" className="login-p">
          Password
        </p>
        <input
          type="password"
          className="login-input"
          value={pw}
          onChange={onPasswordChange}
        />
        <div id="login-bottomBtnDiv">
          <button
            id="login-resetBtn"
            style={resetBtnStyle}
            onClick={onResetClicked}
          >
            Reset
          </button>
          <button id="login-submitBtn" style={submitBtnStyle} type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
