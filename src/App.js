import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context";
import { RequiresAuth } from "./components";
import {
  Home,
  Notes,
  Archive,
  Trash,
  Login,
  SignUp,
  Label,
  Profile,
  PageNotFound,
} from "./pages";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
    
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/notes"}
          element={
            <RequiresAuth>
              <Notes />
            </RequiresAuth>
          }
        />
        <Route
          path={"/archive"}
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        />
        <Route
          path={"/label/:labelName"}
          element={
            <RequiresAuth>
              <Label />
            </RequiresAuth>
          }
        />
        <Route
          path={"/trash"}
          element={
            <RequiresAuth>
              <Trash />
            </RequiresAuth>
          }
        />
        <Route
          path={"/profile"}
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
