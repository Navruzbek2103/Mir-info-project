import React from 'react';
import Header from "./components/Navbar"
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import Today from "./pages/Today"
=======
import { Routes, Route } from 'react-router-dom';
import Main from "./components/Main/";
import Categories from "./pages/Categories";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Pages from "./pages/Pages";



>>>>>>> 5ba22aad7bd60e6c9de462b44e0105b367e3e5b0
const App = () => {
  return (
    <>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Today/>}/>
=======
        <Route path="/today" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pages" element={<Pages />} />
>>>>>>> 5ba22aad7bd60e6c9de462b44e0105b367e3e5b0
      </Routes>
    </>
  );
};

export default App;