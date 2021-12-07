import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/loginpage/Login";
import Home from "./pages/homepage/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
