import icon from './res/image/temp_icon.png';

const Header = () => {
  let login_logout = 'login';

  return (
    <nav>
      <span>
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
      <span id="header-right">
        <p id="header-right-login">{login_logout}</p>
        <img id="header-right-icon" src={icon} alt="your icon" />
      </span>
    </nav>
  );
};

export default Header;
