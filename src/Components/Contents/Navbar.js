import React, { useState, useEffect } from "react";

const Navbar = () => {
  // States
  const [scrolled,setScrolled]=useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }

  return (
    <>
    <header>
      <nav className={x.join(" ")}>
        <div className="nav-inner">
          <h4 className="logo">NetFortress.Co</h4>
          <ul className="nav-list">
            <li className="nav-item">
              <i className="bx bx-category-alt" aria-label="Categories"></i>
            </li>
            <li className="nav-item">
              <i className="bx bx-search" aria-label="Search"></i>
            </li>
            <li className="nav-item">
              <i className="bx bx-user" aria-label="User"></i>
            </li>
            <li className="nav-item">
              <i className="bx bx-menu-alt-right" aria-label="Menu"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">IP Address Tools</li>
          <li className="sidebar-item">Network and Port Tools</li>
          <li className="sidebar-item">Threat Intelligence Tools</li>
          <li className="sidebar-item">Password Security Tools</li>
          <li className="sidebar-item">Domain Tools</li>
          <li className="sidebar-item">Data and Log Analysis Tools</li>
          <li className="sidebar-item">Vulnerability Scanning Tools</li>
          <li className="sidebar-item">Encryption and Decryption Tools</li>
          <li className="sidebar-item">Reporting and Alerts</li>
          <li className="sidebar-item">Cybersecurity News</li>
          <li className="sidebar-item">Settings</li>
        </ul>
      </aside>
      </>
  );
};

export default Navbar;
