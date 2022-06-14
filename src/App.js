import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context";
import {
  Home,
  Notes,
  Archive,
  Label,
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
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
