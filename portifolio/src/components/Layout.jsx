import React from 'react';
import '../index.css';

export default function Layout({ children }) {
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className="header">
        <div className="container">
          <nav className="navbar-container">
            {/* Left links */}
            <ul className="nav-section">
              <li className="nav-item active"><a href="#">Home</a></li>
              <li className="nav-item"><a href="#about">About</a></li>
              <li className="nav-item"><a href="#service">Service</a></li>
            </ul>

            {/* Logo centered */}
            <div className="logo">
              <img src="/assets/jcrea-logo.svg" alt="JCREA" style={{ height: '2rem' }} />
            </div>

            {/* Right links */}
            <ul className="nav-section">
              <li className="nav-item"><a href="#resume">Resume</a></li>
              <li className="nav-item"><a href="#project">Project</a></li>
              <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ flexGrow: 1 }}>
        {children}
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} MeuSite</div>
      </footer>
    </div>
  );
}