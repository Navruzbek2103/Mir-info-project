import React from 'react';
import Header from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Main from "./components/Main/";
import Categories from "./pages/Categories";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Pages from "./pages/Pages";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/today" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </>
  );
};

export default App;