import React, { useState } from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
const index = () => {
  const [block, setBlock] = useState(false);

  return (
    <motion.div
      className="px-3"
      initial={{ opacity: 0, transitionDuration: 0.1 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 1, transitionDuration: 0.1, y: -10000 }}
      transition={{
        delay: 0,
        x: { duration: 1 },
        default: { ease: "backInOut" },
      }}
    >
      <div className="position-relative">
        <div className="my-3 search__page">
          <label
            className="w-100 fw-bold 
        fs-3 search__label"
          >
            Search
            <div className="d-flex align-items-center position-relative justify-content-between gap-1">
              <input
                type="search"
                onClick={(e) => setBlock(true)}
                className="form-control search-bar px-4 my-2 rounded-3"
              />
              <BsSearch className="position-absolute bsSearch" />
              <button
                onClick={(e) => setBlock(false)}
                className={`btn rounded-4 border-0 ${
                  block ? "d-block" : "d-none"
                }`}
              >
                Cancel
              </button>
            </div>
          </label>
        </div>
      </div>
      <div className="search__category w-100">
        <h5 className="fw-bold my-4">Popular Categories</h5>
        <ul className="list-group d-flex flex-row search-list flex-wrap justify-content-start gap-3 align-items-center  w-100">
          <li className="list-items text-danger rounded-2 p-1 fs-5 d-flex justify-content-between align-items-center">
            Politcs <IoIosArrowDown />{" "}
          </li>
          <li className="list-items text-danger rounded-2 p-1 fs-5 d-flex justify-content-between align-items-center">
            Sports <IoIosArrowDown />
          </li>
          <li className="list-items text-danger rounded-2 p-1 fs-5 d-flex justify-content-between align-items-center">
            Economics <IoIosArrowDown />
          </li>
          <li className="list-items text-danger rounded-2 p-1 fs-5 d-flex justify-content-between align-items-center">
            Economics <IoIosArrowDown />
          </li>
          <li className="list-items text-danger rounded-2 p-1 fs-5 d-flex justify-content-between align-items-center">
            Foods <IoIosArrowDown />
          </li>
        </ul>
        <div>
          <h3 className="fw-bold my-4 fs-5"> Popular Tags</h3>
        </div>
        <ul className="popular__list list-group d-flex flex-column align-items-start gap-3">
          <li className="list__item text-danger fs-5 d-flex justify-content-between aling-items-center w-100">
            Politcs
          </li>
          <li className="list__item text-danger fs-5 d-flex justify-content-between aling-items-center w-100">
            Travel
          </li>
          <li className="list__item text-danger fs-5 d-flex justify-content-between aling-items-center w-100">
            Foods
          </li>
          <li className="list__item text-danger fs-5 d-flex justify-content-between aling-items-center w-100">
            Photography
          </li>
          <li className="list__item text-danger fs-5 d-flex justify-content-between aling-items-center w-100">
            Ronaldo
          </li>
          <li className="list__item text-danger fs-5 d-flex justify-content-between aling-items-center w-100">
            Lil Wayne
          </li>
          <li className="list__item text-danger fs-5 d-flex justify-content-between aling-items-center w-100">
            Sports
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default index;
