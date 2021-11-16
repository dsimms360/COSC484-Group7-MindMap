import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";


function App() {
  return (
    <Router>

      <Routes>

        <Route exact path="/" element={<Login />} />

        <Route exact path="/signUp" element={<SignUp />} />

        <Route exact path="/home" element={<Home />} />

      </Routes>

    </Router>
  );
}

export default App;
