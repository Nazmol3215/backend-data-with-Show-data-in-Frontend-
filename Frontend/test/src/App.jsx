import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddListing from './Pages/AddListing';
import Mestiri from './Components/Mestiri';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mestiri />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
    </Router>
  );
}

export default App;
