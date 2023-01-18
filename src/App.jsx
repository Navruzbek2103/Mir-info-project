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

import Animated from "./components/Animated";

const App = () => {


  return (
    <>
      {/* <NavbarMenu /> */}
      {/* <Main /> */}

      <div className="container">
        <div className="row">
          <div className="col-sm-2 bg-white border-end p-0">
            <NavbarMenu />
          </div>
          <div className="col-sm-10">
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
