import React from 'react'
import '../src/Components/UI/Style.css'
import Navbar from './Components/Contents/Navbar';
import CyberSecurity from './Components/Pages/CyberSecurity';
import { SearchDialogProvider } from './Components/Contexts/DialogOneContext';
import SearchDialogue from './Components/Dialog/SearchDialogue';
import {BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import DataLog from './Components/Pages/DataLog';
import Domain from './Components/Pages/Domain';
import EncDecTool from './Components/Pages/EncDecTool';
import IPAddressTool from './Components/Pages/IPAddressTool';
import NetworksTool from './Components/Pages/NetworksTool';
import Reports from './Components/Pages/Reports';
import ThreadIntel from './Components/Pages/ThreadIntel';
import Vulnebrity from './Components/Pages/Vulnebrity';

const App = () => {
  return (
    <Router>
      <SearchDialogProvider>
      <SearchDialogue/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<CyberSecurity/>}/>
      <Route path='/datalog' element={<DataLog/>}/>
      <Route path='/domain' element={<Domain/>}/>
      <Route path='/encdec' element={<EncDecTool/>}/>
      <Route path='/ipaddress' element={<IPAddressTool/>}/>
      <Route path='/network' element={<NetworksTool/>}/>
      <Route path='/reports' element={<Reports/>}/>
      <Route path='/thread' element={<ThreadIntel/>}/>
      <Route path='/vulnebrity' element={<Vulnebrity/>}/>
      </Routes>
      </SearchDialogProvider>
    </Router>
  )
};

export default App;
