import { useState } from "react";
import Topbar from "./components/Topbar";
import Content from "./components/Content";

function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className="">
      <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content darkMode={darkMode}  />
    </div>
  );
}

export default App;
