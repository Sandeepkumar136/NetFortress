import React, { useState } from 'react';
import '../src/Components/UI/Style.css';
import Navbar from './Components/Contents/Navbar';
import CyberSecurity from './Components/Pages/CyberSecurity';
import { SearchDialogProvider } from './Components/Contexts/DialogOneContext';
import SearchDialogue from './Components/Dialog/SearchDialogue';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { ProfileDialogProvider } from './Components/Contexts/DialogTwoContext';
import ProfileDialog from './Components/Dialog/ProfileDialogue';
import { AuthProvider, useLogin } from './Components/Contexts/AuthContext';
import Login from './Components/Log/Login';
import Signup from './Components/Log/Signup';
import Profile from './Components/Log/Profile';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const PrivateRoute = ({children})=>{
    const {user} = useLogin();
    return user ? children : <Navigate to="/login" />
  };
  return (
    <Router>
      <AuthProvider>
      <ProfileDialogProvider>
        <SearchDialogProvider>
          <Navbar />
          <SearchDialogue setSearchQuery={setSearchQuery} />
          <ProfileDialog />
          <Routes>
            <Route path="/" element={<CyberSecurity />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<PrivateRoute><SearchResult searchQuery={searchQuery} /></PrivateRoute>} />
            <Route path="/datalog" element={<PrivateRoute><DataLog /></PrivateRoute>} />
            <Route path="/domain" element={<PrivateRoute><Domain /></PrivateRoute>} />
            <Route path="/encdec" element={<PrivateRoute><EncDecTool /></PrivateRoute>} />
            <Route path="/ipaddress" element={<PrivateRoute><IPAddressTool /></PrivateRoute>} />
            <Route path="/network" element={<PrivateRoute><NetworksTool /></PrivateRoute>} />
            <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
            <Route path="/thread" element={<PrivateRoute><ThreadIntel /></PrivateRoute>} />
            <Route path="/vulnebrity" element={<PrivateRoute><Vulnebrity /></PrivateRoute>} />
            <Route path="/password" element={<PrivateRoute><PasswordSec /></PrivateRoute>} />
          </Routes>
        </SearchDialogProvider>
      </ProfileDialogProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
