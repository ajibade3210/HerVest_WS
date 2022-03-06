import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Home from "./components/home/Home";
import SideMenu from "./components/sidemenu/SideMenu";
import Slider from "./components/slider/Slider";

function App() {
  const [onCollapse, setOnCollapse] = useState(false);
  console.log(onCollapse);
  return (
    <div className="App">
      <SideMenu onCollapse={setOnCollapse} />
      <div className={`container ${onCollapse ? "inactive" : ""}`}>
        <Home onCollapse={onCollapse} />
        <Slider onCollapse={onCollapse} />
        <Card onCollapse={onCollapse} />
      </div>
    </div>
  );
}

export default App;
