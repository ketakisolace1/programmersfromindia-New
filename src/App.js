import React from "react";
import Routers from "../src/routes";
import { Routes, Route } from "react-router-dom"

import "./App.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import "../src/assets/lib/animate/animate.min.css";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillSetPioner from "./pages/Resources/SkillSetPioner";
import LearningCenter from "./pages/Resources/LearningCenter";
import Estimate from "./pages/Estimate/Estimate";
import JoinAsDev from "./pages/Join/JoinAsDev";
import Expert from "./pages/TalkWithExpert/Expert";
import FindDev from "./pages/FindDev/FindDev";
import ContactUs from "./pages/ContactUs/ContactUs";
import Explore from "./pages/ExploreByCategory/Explore";
import SignIn from "./pages/SignIn/SignIn";



const App = () => {
  return (
    <div>
      {/* <Routers/>  */}
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/about-us" element={ <About/> } />
        <Route path="/skills" element={<SkillSetPioner/>} />
        <Route path="/learnings" element={<LearningCenter/>} />
        <Route path="/estimate" element={ <Estimate/> } />
        <Route path="/join" element={ <JoinAsDev/> } />
        <Route path="/expert" element={ <Expert/> } />
        <Route path="/hire" element={ <FindDev/> } />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/sign-in" element={<SignIn/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;
