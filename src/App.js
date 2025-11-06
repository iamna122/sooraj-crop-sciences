import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import "./App.css"; // (we’ll add some simple styles here)

function App() {
  return (
    <Router>
      <header className="header">
        <div className="logo-section">
          <img
            src={`${process.env.PUBLIC_URL}/sooraj-logo.PNG`}
            alt="Sooraj Logo"
            className="logo"
          />
          <h1 className="site-title">Sooraj Crop Sciences</h1>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          {/* <Link to="/contact" className="nav-link">Contact</Link> */}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
