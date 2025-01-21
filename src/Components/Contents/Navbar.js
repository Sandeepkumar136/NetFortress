import React, { useState } from "react";
import { useSearchDialog } from "../Contexts/DialogOneContext";
import { Link } from "react-router-dom";
import { useProfileDialog } from "../Contexts/DialogTwoContext";

const Navbar = () => {
  // States
  const [isSidebar, setIsSidebar] = useState(false);
  const {openDialog} = useSearchDialog();
  const {openPdialog} = useProfileDialog();

  // Functions
  const HandleNavigations = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav-inner">
            <Link to="/" className="logo">NetFortress.Co</Link>
            <ul className="nav-list">
              <li className="nav-item">
                <i className="bx bx-category-alt" aria-label="Categories"></i>
              </li>
              <li onClick={openDialog} className="nav-item">
                <i className="bx bx-search" aria-label="Search"></i>
              </li>
              <li onClick={openPdialog} className="nav-item">
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
          <Link to="/" className="logo-sidebar">NetFortress.Co</Link>
          <button
            onClick={HandleNavigations}
            className="toggle-sidebar"
            aria-label="Close Sidebar"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <ul className="sidebar-list">
          <li onClick={()=>{openPdialog(); HandleNavigations();}} className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-user"></i>
            </span>
            <span className="s-t-l">Profile</span>
          </li>
          <li onClick={()=>{openDialog(); HandleNavigations();}} className="sidebar-item">
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
          <Link to="/" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-news"></i>
            </span>
            <span className="s-t-l">Cybersecurity News</span>
          </Link>
          <Link to="/ipaddress" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-map"></i>
            </span>
            <span className="s-t-l">IP Address Tools</span>
          </Link>
          <Link to="/network" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-plug"></i>
            </span>
            <span className="s-t-l">Network and Port Tools</span>
          </Link>
          <Link to="/thread" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-shield-alt-2"></i>
            </span>
            <span className="s-t-l">Threat Intelligence Tools</span>
          </Link>
          <Link to="/password" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-globe"></i>
            </span>
            <span className="s-t-l">Password Security Tools</span>
          </Link>
          <Link to="/domain" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-dots-horizontal-rounded"></i>
            </span>
            <span className="s-t-l">Domain Tools</span>
          </Link>
          <Link to="/datalog" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-bar-chart-alt-2"></i>
            </span>
            <span className="s-t-l">Data and Log Analysis Tools</span>
          </Link>
          <Link to="/vulnebrity" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-bug"></i>
            </span>
            <span className="s-t-l">Vulnerability Scanning Tools</span>
          </Link>
          <Link to="/encdec" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-lock"></i>
            </span>
            <span className="s-t-l">Encryption and Decryption Tools</span>
          </Link>
          <Link to="/reports" className="sidebar-item">
            <span className="s-i-l">
              <i className="bx bx-bell"></i>
            </span>
            <span className="s-t-l">Reporting and Alerts</span>
          </Link>
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
