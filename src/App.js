import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// ------------------Landing page--------------------------
import Home from "./Components/Main/Home";
// ------------------Countries--------------------------
import Usa from "./Components/Countries/Usa";
import Portugal from "./Components/Countries/Portugal";
import Mexico from "./Components/Countries/Mexico";
import France from "./Components/Countries/France";
import Colombia from "./Components/Countries/Colombia";
// ------------------ErrorPage-------------------------
import Error from "./Components/Main/ErrorPage";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Routes>
        {/* // ------------------Landing page-------------------------- */}
        <Route path="/" element={<Home data={data} setData={setData} />} />

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
        {/* // ------------------ErrorPage------------------------- */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
