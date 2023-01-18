// import React from "react";
// import Header from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Main from "./components/Main/";
// import Categories from "./pages/Categories";
// import Discover from "./pages/Discover";
// import Search from "./pages/Search";
// import Pages from "./pages/Pages";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/discover" element={<Discover />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/pages" element={<Pages />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";

import NavbarMenu from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Categories from "./pages/Categories";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Pages from "./pages/Pages";
import Today from "./pages/Today";
import Animated from "./components/Animated";

const App = () => {
  const styleMain = {
    height: "auto",
  };

  const styleRow = {
    boxShadow: "inset 0px 0 20px 7px #EBEBEB",
  };

  return (
    <>
      {/* <NavbarMenu /> */}
      {/* <Main /> */}

      <div className="container">
        <div className="row" style={styleRow}>
          <div className="col-sm-3 bg-white border-end" style={styleMain}>
            <NavbarMenu />
          </div>
          <div className="col-sm-9 p-0">
            <Animated />
          </div>
        </div>
      </div>

      {/* <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pages" element={<Pages />} />
      </Routes> */}
    </>
  );
};

export default App;
