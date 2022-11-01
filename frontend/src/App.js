import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/LandingPage/Landing";
import Home from "./Components/Home/Home";
import Cards from "./Components/Cars/Cards";
import { MainContainer } from "./Components/Login/MainContainer";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./Actions/userActions";

function App() {
  const dispatch = useDispatch();
  const [container, setContainer] = useState("logined");
  const [logoClass, setLogoClass] = useState("logo blue");
  const changeContainerState = () => {
    if (container === "logined") {
      setContainer("registered");
      setLogoClass("logo");
    } else if (container === "registered") {
      setContainer("logined");
      setLogoClass("logo blue");
    }
  };
  useEffect(() => {
   dispatch(loadUser());
  }, [])
  
  return (
    <>
      {/* <Navbar/> */}

      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/cars" element={<Cards />}></Route>
        <Route
          exact
          path="/login"
          element={
            <MainContainer
              container={container}
              changeContainerState={changeContainerState}
              logoClass={logoClass}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
