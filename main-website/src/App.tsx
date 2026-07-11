import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './bootstrap/bootstrap.min.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import "./style.css";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import PhotoResizer from "./pages/Tools/PhotoResizer/PhotoResizer";
function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
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
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/tools/photo-resizer" element={<PhotoResizer />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
