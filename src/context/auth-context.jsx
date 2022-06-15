import {useState, useContext, createContext} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const token = localStorage.getItem("token");
  const [auth, setAuth] = useState({
    token: token ?? "",
    isLoggedIn: token ? true : false,
  });
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};
