import React from "react";
import "./App.css";
import Login from "./login";
import Signup from "./signup"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ForgetPassword from "./forgetPassword";


function App(){
  return(
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/forget_password" element={<ForgetPassword/>}/>
      </Routes>
    </Router>
    
  );
}
export default App;