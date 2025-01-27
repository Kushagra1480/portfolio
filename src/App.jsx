import React from 'react';
import {Header} from './components/Header'
import {EditableSection} from './components/EditableSection'
import {NoteSection} from './components/NoteSection'
import {ProjectShowcase} from './components/ProjectShowcase'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 p-8 flex flex-col items-center">
      <Header />
      <Navbar />
    </div>
  );
};

export default App;