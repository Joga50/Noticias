import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// ------------------Landing page--------------------------
import Home from "./Components/Main/Home";
// -----------------------Account management-------------------
import Register from "./Components/AccountManagement/Register";
import SignIn from "./Components/AccountManagement/SignIn";
// ------------------Countries--------------------------
import Usa from "./Components/Countries/Usa";
import Portugal from "./Components/Countries/Portugal";
import Mexico from "./Components/Countries/Mexico";
import France from "./Components/Countries/France";
import Colombia from "./Components/Countries/Colombia";
// -------------------------------About Us-------------------------------
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/AboutUs/ContactUs";
import FAQ from "./Components/AboutUs/FAQ";
import PrivacyPolicy from "./Components/AboutUs/PrivacyPolicy";

// ------------------ErrorPage-------------------------
import Error from "./Components/Main/ErrorPage";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Routes>
        {/* // ------------------Landing page-------------------------- */}
        <Route path="/" element={<Home data={data} setData={setData} />} />
        {/* -----------------------Account management------------------- */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        {/* ----------------------------------Countries--------------------------  */}
        <Route path="USA" element={<Usa data={data} setData={setData} />} />
        <Route
          path="/Portugal"
          element={<Portugal data={data} setData={setData} />}
        />
        <Route
          path="/Mexico"
          element={<Mexico data={data} setData={setData} />}
        />
        <Route
          path="/France"
          element={<France data={data} setData={setData} />}
        />
        <Route
          path="/Colombia"
          element={<Colombia data={data} setData={setData} />}
        />
        {/* --------------------------------About Us------------------------------- */}
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

        {/* // ------------------ErrorPage------------------------- */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
