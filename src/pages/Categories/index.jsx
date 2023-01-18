import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
import Img from "./../../assets/images/lib.webp";
import Img1 from "./../../assets/images/Gregory13.jpg";
import Img2 from "./../../assets/images/library.jpg";
import Img3 from "./../../assets/images/books.avif";
import Img4 from "./../../assets/images/thumb-5.jpg";
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
          <div className="px-2 my-2">
            <h1 className="fw-bold my-2">Categories</h1>
            <div class="text-center d-grid d-flex flex-row mx-auto flex-wrap flex-lg-wrap flex-md-wrap flex-sm-wrap col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 w-100 gap-3">
              <motion.div
                whileTap={{ scale: 0.99 }}
                class=" bg-secondary category__card position-relative rounded-2 col-xxl-4 col-xl-3  col-lg-3 col-md-12 col-sm-12 col-12"
              >
                <img src={Img} className="cate_img rounded-2" alt="images" />
                <h3 className="fw-bold position-absolute bottom-0 text-white fs-4">
                  Sports
                </h3>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.99 }}
                class="bg-secondary category__card  position-relative rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"
              >
                <img src={Img1} className="cate_img rounded-2" alt="images" />
                <h1 className="fw-bold position-absolute bottom-0 text-white fs-4">
                  Library
                </h1>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.99 }}
                class="bg-secondary category__card  position-relative rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-12 col-12 col-sm-12"
              >
                <img src={Img2} className="cate_img rounded-2" alt="images" />
                <h1 className="fw-bold position-absolute bottom-0 text-white fs-4">
                  Travel
                </h1>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.99 }}
                class="bg-secondary category__card  position-relative rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-12 col-12 col-sm-12"
              >
                <img src={Img3} className="cate_img rounded-2" alt="images" />
                <h1 className="fw-bold position-absolute bottom-0 text-white fs-4 ">
                  Food
                </h1>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.99 }}
                class="bg-secondary category__card  position-relative rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-12 col-12 col-sm-12"
              >
                <img src={Img4} className="cate_img rounded-2" alt="images" />
                <h1 className="fw-bold position-absolute bottom-0 text-white fs-4">
                  Food
                </h1>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.99 }}
                class="bg-secondary category__card  position-relative rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-12 col-12 col-sm-12"
              >
                <img src={Img2} className="cate_img rounded-2" alt="images" />
                <h1 className="fw-bold position-absolute bottom-0 text-white fs-4">
                  Food
                </h1>
              </motion.div>
            </div>
            <div className="category_box">
              <div className="parent">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
