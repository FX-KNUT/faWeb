import icon from './res/image/temp_icon.png';

const Header = () => {
  let login_logout = 'login';
  const icon_img = document.querySelector('#header-right-icon');
  const modal = document.querySelector('#modal');
  const login = document.querySelector('#login');

  const onLoginClicked = (e) => {
    console.log(modal);
    console.log(login);
    modal?.classList.toggle('show');
    login?.classList.toggle('show');
  };

  const onImgClicked = (e) => {
    console.log(e);
    console.log(icon_img);
  };

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
        <p id="header-right-login" onClick={onLoginClicked}>
          {login_logout}
        </p>
        <img
          id="header-right-icon"
          src={icon}
          alt="your icon"
          onClick={onImgClicked}
        />
      </span>
    </nav>
  );
};

export default Header;
