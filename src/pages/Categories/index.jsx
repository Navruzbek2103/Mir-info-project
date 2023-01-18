import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
const index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transitionDuration: 0.1 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 1, transitionDuration: 0.1, y: -10000 }}
      transition={{
        delay: 0,
        x: { duration: 1 },
        default: { ease: "easeInOut" },
      }}
    >
      <div className="row">
        <div className="container">
          <div className="px-2">
            <h1 className="fw-bold my-2">Categories</h1>
            <div class="text-center d-grid d-flex flex-row mx-auto p-2 flex-wrap flex-lg-wrap flex-md-wrap flex-sm-wrap col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 w-100 gap-3">
              <div class=" bg-secondary category__card rounded-2 col-xxl-4 col-xl-3  col-lg-3 col-md-12 col-sm-12 col-12">
                .g-col-6 .g-col-md-
              </div>
              <div class="bg-secondary category__card rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                .g-col-6 .g-col-md-4
              </div>
              <div class="bg-secondary category__card rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-12 col-12 col-sm-12">
                .g-col-6 .g-col-md-4
              </div>
              <div class="bg-secondary category__card rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-12 col-12 col-sm-12">
                .g-col-6 .g-col-md-4
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
