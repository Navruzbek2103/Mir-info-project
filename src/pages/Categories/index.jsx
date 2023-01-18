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
      exit={{ opacity: 0.5, y: -10000 }}
      transition={{
        delay: 0,
        x: { duration: 2 },
        default: { ease: "backInOut" },
      }}
    >
      <div className="cate px-4 ">
        <div>
          <h1 className="fw-bold my-2">Categories</h1>
        </div>
        <div class="d-flex mx-auto gap-4 justify-content-between flex-wrap">
          <motion.div
            whileTap={{ scale: 0.99 }}
            class=" bg-secondary category__card position-relative rounded-2"
          >
            <img src={Img} className="cate_img rounded-2" alt="images" />
            <h3 className="fw-bold position-absolute bottom-0 text-white fs-4">
              Sports
            </h3>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.99 }}
            class="bg-secondary category__card  position-relative rounded-2 "
          >
            <img src={Img1} className="cate_img rounded-2" alt="images" />
            <h1 className="fw-bold position-absolute bottom-0 text-white fs-4">
              Library
            </h1>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.99 }}
            class="bg-secondary category__card  position-relative rounded-2"
          >
            <img src={Img2} className="cate_img rounded-2" alt="images" />
            <h1 className="fw-bold position-absolute bottom-0 text-white fs-4">
              Travel
            </h1>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.99 }}
            class="bg-secondary category__card  position-relative rounded-2"
          >
            <img src={Img3} className="cate_img rounded-2" alt="images" />
            <h1 className="fw-bold position-absolute bottom-0 text-white fs-4 ">
              Food
            </h1>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.99 }}
            class="bg-secondary category__card  position-relative rounded-2"
          >
            <img src={Img4} className="cate_img rounded-2" alt="images" />
            <h1 className="fw-bold position-absolute bottom-0 text-white fs-4">
              Food
            </h1>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.99 }}
            class="bg-secondary category__card  position-relative rounded-2"
          >
            <img src={Img2} className="cate_img rounded-2" alt="images" />
            <h1 className="fw-bold position-absolute bottom-0 text-white fs-4">
              Food
            </h1>
          </motion.div>
        </div>
        <div className="category_box my-4">
          <div className="category__top">
            <span className="fw-bold text-uppercase text-secondary">
              Recent posts
            </span>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="fw-bold my-2">Sports</h3>
              <button className="btn btn-danger rounded-4 py-0 d-flex justify-content-center align-items-center">
                See All
              </button>
            </div>
          </div>
          <div className="parents d-flex w-100 justify-content-between flex-row">
            <motion.div
              whileTap={{ scale: 0.99 }}
              className=" bg-secondary parent__card position-relative rounded-2 "
            >
              <img src={Img1} className="parent_img rounded-2" alt="images" />
              <h3 className="fw-bold category__title position-absolute  text-white fs-6">
                Moto-Cross: The Champions Made the Show
              </h3>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.99 }}
              className="parent__card position-relative rounded-2 "
            >
              <img src={Img3} className="parent_img rounded-2" alt="images" />
              <h3 className="fw-bold category__title position-absolute  text-white fs-6">
                Moto-Cross: The Champions Made the Show
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
