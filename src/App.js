import React, { useState } from 'react';
import '../src/Components/UI/Style.css';
import Navbar from './Components/Contents/Navbar';
import CyberSecurity from './Components/Pages/CyberSecurity';
import { SearchDialogProvider } from './Components/Contexts/DialogOneContext';
import SearchDialogue from './Components/Dialog/SearchDialogue';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataLog from './Components/Pages/DataLog';
import Domain from './Components/Pages/Domain';
import EncDecTool from './Components/Pages/EncDecTool';
import IPAddressTool from './Components/Pages/IPAddressTool';
import NetworksTool from './Components/Pages/NetworksTool';
import Reports from './Components/Pages/Reports';
import ThreadIntel from './Components/Pages/ThreadIntel';
import Vulnebrity from './Components/Pages/Vulnebrity';
import PasswordSec from './Components/Pages/PasswordSec';
import SearchResult from './Components/Contents/SearchResult';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <Router>
          <SearchDialogProvider>
            <Navbar />
            <SearchDialogue setSearchQuery={setSearchQuery} />
            <Routes>
              <Route path="/" element={<CyberSecurity />} />

              {/* Private routes requiring login */}
              <Route path="/search" element={<SearchResult searchQuery={searchQuery} />} />
              <Route path="/datalog" element={<DataLog />} />
              <Route path="/domain" element={<Domain />} />
              <Route path="/encdec" element={<EncDecTool />} />
              <Route path="/ipaddress" element={<IPAddressTool />} />
              <Route path="/network" element={<NetworksTool />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/thread" element={<ThreadIntel />} />
              <Route path="/vulnebrity" element={<Vulnebrity />} />
              <Route path="/password" element={<PasswordSec />} />
            </Routes>
          </SearchDialogProvider>
    </Router>
  );
};

export default App;
