import React, {useState} from 'react'
import {Header} from './components/Header'
import {ProjectShowcase} from './components/ProjectShowcase'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import RecruiterNotes from './components/RecruiterNotes'
import Dashboard from './components/Dashboard'
import SystemCursor from './components/SystemCursor'
import MobileTerminal from './components/MobileTerminal'


const App = () => {
  const items = ['Dashboard', 'Projects', 'Resume', 'Notes']
  const [activeItem, setActiveItem] = useState(items[0])
  
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <Dashboard />
      case 'Projects':
        return <ProjectShowcase />
      case 'Resume':
        return <Resume />
      case 'Notes':
        return <RecruiterNotes />
      default:
        return null
    }
  }

  return (
    <>
    
    <MobileTerminal />
    <div className="hidden lg:flex min-h-screen bg-gray-950 p-8 flex flex-col items-center">
      <SystemCursor />
      
      <Header />
      <Navbar items = {items} activeItem = {activeItem} setActiveItem = {setActiveItem}/>
      
      <div className='mt-4 p-4'>
        {renderContent()}
      </div>
    </div>
    </>
  );
};

export default App;