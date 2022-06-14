import "./App.css";

import { Routes, Route } from "react-router-dom";


import {
  Home
 
} from "./pages";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
   
      <Routes>
        <Route path={"/"} element={<Home />} />
      
     
     
    
      
      </Routes>
    </div>
  );
}

export default App;
