import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Box } from '@mui/material';
function App() {
  return (
      <Router>
        <Box>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Box>
      </Router>
  );
}

export default App;
