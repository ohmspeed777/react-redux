import React from 'react';
import { CustomProvider } from 'rsuite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import Home from './pages/Home';
import Two from './pages/Two';

const App = () => {
  return (
    <CustomProvider theme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="2" element={<Two />} />
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  );
};

export default App;
