import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import "./style.css";
import Preloader from './Pre';
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import './bootstrap/bootstrap.min.css';
import About from "./pages/About/About";
import Resume from "./components/Resume";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
