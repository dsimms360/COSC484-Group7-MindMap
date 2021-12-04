import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Work from "./components/Work";
import School from "./components/School";
import Extra from "./components/Extra";



function App() {
  return (
    <Router>

      <Routes>

        <Route exact path="/" element={<Login />} />

        <Route exact path="/signUp" element={<SignUp />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/School" element={<School />} />

        <Route exact path="/Work" element={<Work />} />

        <Route exact path="/Extra" element={<Extra />} />

      </Routes>

    </Router>
  );
}

export default App;
