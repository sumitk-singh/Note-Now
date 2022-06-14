import "./Profile.css";
import profileImg from "../../assets/profile_pic.jpg";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context";
import {NavMenu, Header} from "../../components";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setAuth({token: "", isLoggedIn: false});
    navigate("/");
  };
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="profile-ctn br-sm pd-lg">
            <div className="profile-img br-full">
              <img 
                src={profileImg}
                alt="user-profile"
                className="img-responsive"
              />
            </div>
            <div className="pd-bottom-lg">
              <p>Name</p>
              <p className="para-lg">
                {userData.firstName + " " + userData.lastName}
              </p>
            </div>
            <div className="pd-bottom-lg">
              <p>Email</p>
              <p className="para-lg">{userData.email}</p>
            </div>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;