import React from 'react'
import '../src/Components/UI/Style.css'
import Navbar from './Components/Contents/Navbar';
import CyberSecurity from './Components/Pages/CyberSecurity';
import { SearchDialogProvider } from './Components/Contexts/DialogOneContext';
import SearchDialogue from './Components/Dialog/SearchDialogue';
import SearchResult from './Components/Contents/SearchResult';

const App = () => {
  return (
    <div>
      <SearchDialogProvider>
      <Navbar/>
      <CyberSecurity/>
      <SearchDialogue setSearchQuery={setSearchQuery}/>
      <SearchResult />
      </SearchDialogProvider>
    </div>
  )
}

export default App;
