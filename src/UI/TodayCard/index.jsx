import React from "react";
import Img from "./../../assets/images/thumb-15.jpg";
import "./style.scss";
import { motion } from "framer-motion";
const index = () => {
  return (
    <>
      <div>
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="card w-100 d-flex flex-row justify-content-start mt-4 border-end-0 border-start-0 border-top-0 gap-3 align-items-start"
        >
          <img src={Img} className="card__img" alt="images" />
          <div className="d-flex flex-column align-items-start justify-content-between">
            <span className="text-secondary fw-bold text-uppercase">
              Fashion
            </span>
            <h3 className="text-black fw-bold my-2">
              The 6th Edition of the Body Painting Contest
            </h3>
            <div className="d-flex justify-content-between flex-row align-items-center">
              <img
                src={Img}
                width={30}
                height={30}
                className="rounded-5"
                alt="avatar"
              />
              <p className="text-secondary mx-2">Elena Anka </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.98 }}

          className="card d-flex flex-row justify-content-start mt-4 border-end-0 border-start-0 border-top-0 gap-3 align-items-start"
        >
          <img src={Img} className="card__img" alt="images" />
          <div className="d-flex flex-column align-items-start justify-content-between">
            <span className="text-secondary fw-bold text-uppercase">
              Fashion
            </span>
            <h3 className="text-black fw-bold my-2">
              The 6th Edition of the Body Painting Contest
            </h3>
            <div className="d-flex justify-content-between flex-row align-items-center">
              <img
                src={Img}
                width={30}
                height={30}
                className="rounded-5"
                alt="avatar"
              />
              <p className="text-secondary mx-2">Elena Anka </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default index;
