import React, { useState } from "react";
import { useSearchDialog } from "../Contexts/DialogOneContext";

const Navbar = () => {
  // States
  const [isSidebar, setIsSidebar] = useState(false);
  const {openDialog} = useSearchDialog();

  // Functions
  const HandleNavigations = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav-inner">
            <h4 className="logo">NetFortress.Co</h4>
            <ul className="nav-list">
              <li className="nav-item">
                <i className="bx bx-category-alt" aria-label="Categories"></i>
              </li>
              <li onClick={openDialog} className="nav-item">
                <i className="bx bx-search" aria-label="Search"></i>
              </li>
              <li className="nav-item">
                <i className="bx bx-user" aria-label="User"></i>
              </li>
              <li
                onClick={HandleNavigations}
                className="nav-item-t"
              >
                <i className="bx bx-menu-alt-right" aria-label="Menu"></i>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <aside className={`sidebar ${isSidebar ? "open" : "close"}`}>
        <div className="sidebar-logo-contain">
          <h4 className="logo-sidebar">NetFortress.Co</h4>
          <button
            onClick={HandleNavigations}
            className="toggle-sidebar"
            aria-label="Close Sidebar"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-user"></i>
            </span>
            <span className="s-t-l">Profile</span>
          </li>
          <li onClick={()=> {openDialog(); HandleNavigations();}} className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-search"></i>
            </span>
            <span className="s-t-l">Search</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-category-alt"></i>
            </span>
            <span className="s-t-l">Saved</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-news"></i>
            </span>
            <span className="s-t-l">Cybersecurity News</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-map"></i>
            </span>
            <span className="s-t-l">IP Address Tools</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-plug"></i>
            </span>
            <span className="s-t-l">Network and Port Tools</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-shield-alt-2"></i>
            </span>
            <span className="s-t-l">Threat Intelligence Tools</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-globe"></i>
            </span>
            <span className="s-t-l">Password Security Tools</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-dots-horizontal-rounded"></i>
            </span>
            <span className="s-t-l">Domain Tools</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-bar-chart-alt-2"></i>
            </span>
            <span className="s-t-l">Data and Log Analysis Tools</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-bug"></i>
            </span>
            <span className="s-t-l">Vulnerability Scanning Tools</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-lock"></i>
            </span>
            <span className="s-t-l">Encryption and Decryption Tools</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-bell"></i>
            </span>
            <span className="s-t-l">Reporting and Alerts</span>
          </li>
          <li className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-cog"></i>
            </span>
            <span className="s-t-l">Settings</span>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
