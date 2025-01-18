import React from 'react'
import '../src/Components/UI/Style.css'
import Navbar from './Components/Contents/Navbar';
import CyberSecurity from './Components/Pages/CyberSecurity';
import { SearchDialogProvider } from './Components/Contexts/DialogOneContext';
import SearchDialogue from './Components/Dialog/SearchDialogue';

const App = () => {
  return (
    <div>
      <SearchDialogProvider>
      <Navbar/>
      <CyberSecurity/>
      <SearchDialogue/>
      </SearchDialogProvider>
    </div>
  )
}

export default App;
