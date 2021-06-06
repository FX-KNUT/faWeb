const Header = () => {
  return (
    <nav>
      <span>
        <p id="nav_p"></p>
        <ul className="header-ul">
          <li>
            <a href=".">Home</a>
          </li>
          <li>
            <a href="#/introduction">Introduction</a>
          </li>
          <li>
            <a href="#/profile">Profile</a>
          </li>
          <li>
            <a href="#/location">Location</a>
          </li>
          <li>
            <a href="#/community">Community</a>
          </li>
        </ul>
      </span>
    </nav>
  );
};

export default Header;
