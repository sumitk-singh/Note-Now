import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useTheme} from "../context";
import Logo from '../../src/assets/images/logo.png';

const Header = () => {
  const {theme, setTheme} = useTheme();


  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  return (
    <header className="top-header">
      <div className="flex-align-center">
        <img id="logo" src={Logo} alt="logo" />
      </div>
      <div className="theme-profile-ctn">
        <span
          className="material-icons theme-icon cursor-pointer"
          title="Change theme"
          onClick={handleTheme}
        >
          {theme === "light-theme" ? "dark_mode" : "light_mode"}
        </span>

        <div className="avatar-ctn br-full cursor-pointer">
          <Link to="/profile">
         
          <button id="profile-btn">  <i class="fa fa-user" aria-hidden="true"></i> </button>
            
          </Link>
        </div>
       
      </div>
    </header>
  );
};

export {Header};
