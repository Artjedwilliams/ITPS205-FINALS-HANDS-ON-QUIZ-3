import React from "react";
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";

import "./App.css";

function Home() {
  return (
    <div className="page-card">
      <h1>Home</h1>
      <p>
        Welcome to our cozy little website. Relax and explore the pages using
        the navigation above.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="page-card">
      <h1>About</h1>
      <p>
        This application was built using React Router with smooth navigation
        between pages.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-card">
      <h1>Contact</h1>
      <p>
        Feel free to reach out anytime. Thanks for visiting our simple React
        application.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <div className="logo">CozySpace</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;