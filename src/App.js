import React from 'react';
import { CustomProvider } from 'rsuite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import Home from './pages/Home';
import Post from './pages/Post';
import Search from './pages/Search';
import User from './pages/User';
import UserUpdate from './pages/UserUpdate';

const App = () => {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user" element={<User />} />
          <Route path="/userUpdate/:id" element={<UserUpdate />} />
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  );
};

export default App;
