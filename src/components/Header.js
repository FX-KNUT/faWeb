// import icon from './res/image/temp_icon.png';
// import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { RiLoginBoxFill, RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const category = [
  {
    name: "fxweb",
    text: "Home",
  },
  {
    name: "introduction",
    text: "Introduction",
  },
  {
    name: "profile",
    text: "Profile",
  },
  {
    name: "location",
    text: "Location",
  },
  {
    name: "community",
    text: "Community",
  },
];

const Header = () => {
  const [curLogin, setCurLogin] = useState(true);
  const login_logout_icon = curLogin ? (
    <RiLoginBoxFill />
  ) : (
    <RiLogoutBoxRFill />
  );
  const modal = document.querySelector("#modal");
  const login = document.querySelector("#login");

  const onLoginClicked = (e) => {
    console.log(modal);
    console.log(login);
    modal?.classList.toggle("show");
    login?.classList.toggle("show");
  };

  return (
    <nav className="categoryBox">
      {category.map((c) => (
        <NavLink
          to={c.name}
          className="category"
          key={c.name}
          activeClassName="active"
        >
          {c.text}
        </NavLink>
      ))}
      <span id="header-right">
        <p id="header-right-login" onClick={onLoginClicked}>
          {login_logout_icon}
        </p>
        {/* <MdAccountCircle className="account" /> */}
      </span>
    </nav>
  );
};

export default Header;
