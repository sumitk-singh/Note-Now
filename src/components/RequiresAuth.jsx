import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../context";

const RequiresAuth = ({children}) => {
  const {auth} = useAuth();
  const location = useLocation();

  return auth.token ? (
    children
  ) : (
    <Navigate to="/login" state={{from: location}} replace />
  );
};

export {RequiresAuth};
