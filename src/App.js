import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Notes,
  Label,
  PageNotFound,
} from "./pages";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      {/* <ToastContainer autoClose={1200} /> */}
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
