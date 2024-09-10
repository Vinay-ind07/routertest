import './App.css';
// import Navbar from './components/Navbar';
// import Aboutus from './components/Aboutus';
// import Contact from './components/Contact';
import React from "react";
import Newscontainer from './components/Newscontainer';
import Navbar from './components/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <><Navbar />
    <h1 className='text-center'>top headlines</h1>
    <Newscontainer /></>
  );
}

export default App;
