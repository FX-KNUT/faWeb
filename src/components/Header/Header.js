import { NavLink, Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
// {
//   name: "fxweb",
//   text: <MdHome />,
// },
const category = [
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
  return (
    <nav className="categoryBox">
      <Link to="fxweb" className="home_icon_wrapper">
        <MdHome className="home_icon" />
      </Link>
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
    </nav>
  );
};

export default Header;
