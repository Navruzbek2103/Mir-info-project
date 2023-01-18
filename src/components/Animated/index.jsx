import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Categories from "./../../pages/Categories";
import Discover from "./../../pages/Discover";
import Search from "./../../pages/Search";
import Pages from "./../../pages/Pages";
import Today from "./../../pages/Today";
import {AnimatePresence } from "framer-motion"
function index() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Today />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </AnimatePresence>
  );
}

export default index;
