import React, { createContext, useState } from "react";
import Topbar from "./components/Topbar";
import Content from "./components/Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCountry from "./components/SingleCountry";

export const AppContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <div>
          <Topbar />
          <Routes>
            {/* Pass darkMode as a prop to SingleCountry */}
            <Route path="/" element={<Content darkMode={darkMode} />} />
            <Route path="/singleCountry" element={<SingleCountry darkMode={darkMode} />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
