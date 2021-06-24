// import icon from './res/image/temp_icon.png';
import { MdAccountCircle } from "react-icons/md";
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
  let login_logout = "login";
  // const icon_img = document.querySelector('#header-right-icon');
  const modal = document.querySelector("#modal");
  const login = document.querySelector("#login");

  const onLoginClicked = (e) => {
    console.log(modal);
    console.log(login);
    modal?.classList.toggle("show");
    login?.classList.toggle("show");
  };

  // const onImgClicked = (e) => {
  //   console.log(e);
  //   console.log(icon_img);
  // };

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
          {login_logout}
        </p>
        {/* <img
          id="header-right-icon"
          src={icon}
          alt="your icon"
          onClick={onImgClicked}
        /> */}
        <MdAccountCircle className="account" />
      </span>
    </nav>
  );
};

export default Header;
