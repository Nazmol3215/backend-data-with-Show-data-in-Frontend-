import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddListing from './Pages/AddListing';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
    </Router>
  );
}

export default App;
