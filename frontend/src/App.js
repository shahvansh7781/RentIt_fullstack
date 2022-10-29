import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/LandingPage/Landing";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      {/* <Navbar/> */}

      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
