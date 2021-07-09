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
    </nav>
  );
};

export default Header;
