import React from 'react';
import Header from "./components/Navbar"
import { Route, Routes } from 'react-router-dom';
import Today from "./pages/Today"
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Today/>}/>
      </Routes>
    </>
  );
};

export default App;