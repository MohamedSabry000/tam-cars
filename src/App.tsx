
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useMediaQuery } from "react-responsive";

import { Navbar, Sidebar } from './components';
import {
  Home,
} from './pages';
import Cars from './pages/Cars';

function App() {
  const [mr, setMr] = useState("ml-64");
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    if (isMobile) {
      setMr("ml-14");
    } else {
      setMr('ml-64');
    }
  }, [isMobile]);

  return (
    <BrowserRouter>
    <Box>
      <div className="d-flex flex-column flex-md-row">
        <Sidebar />
        <Box className={`flex-grow-1 ${mr} h-full`}>
          <Navbar />
          <div className="bg-gray-50 dark:bg-gray-900 h-full p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
            </Routes>
          </div>
        </Box>
      </div>
    </Box>
  </BrowserRouter>
  );
}

export default App;
