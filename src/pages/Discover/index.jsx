import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
import PicsumImage from "./../../assets/images/thumb-5.jpg";
import { NavLink, Link } from "react-router-dom";
import PicsumImage2 from "./../../assets/images/thumb-15.jpg";
import { AiFillStar } from "react-icons/ai";
import PicsumImage3 from "./../../assets/images/future.jpg";

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
      <div className="discover px-4">
        <section className="discover-hero py-4">
          <h2 className="discover-hero__subtitle fs-6 mb-1 text-secondary">
            This week
          </h2>
          <h3 className="discover-hero__title fs-1 mb-4">Discover</h3>
          <ul className="discover-hero__list d-flex justify-content-between flex-wrap">
            <li className="discover-hero__item">
              <Link
                to=""
                className="discover-hero__item-link position-relative rounded-4 overflow-hidden d-block"
              >
                <img
                  src={PicsumImage}
                  alt="card img"
                  className="discover-hero__item-img w-100 h-100 "
                />
                <h4 className="discover-hero__item-title position-absolute bottom-0 text-white m-3 fw-semibold">
                  NASA chooses it's next chief scientist
                </h4>
              </Link>
            </li>
            <li className="discover-hero__item">
              <Link
                to=""
                className="discover-hero__item-link position-relative rounded-4 overflow-hidden d-block"
              >
                <img
                  src={PicsumImage}
                  alt="card img"
                  className="discover-hero__item-img w-100 h-100 "
                />
                <h4 className="discover-hero__item-title position-absolute bottom-0 text-white m-3 fw-semibold">
                  NASA chooses it's next chief scientist
                </h4>
              </Link>
            </li>
            <li className="discover-hero__item">
              <Link
                to=""
                className="discover-hero__item-link position-relative rounded-4 overflow-hidden d-block"
              >
                <img
                  src={PicsumImage}
                  alt="card img"
                  className="discover-hero__item-img w-100 h-100 "
                />
                <h4 className="discover-hero__item-title position-absolute bottom-0 text-white m-3 fw-semibold">
                  NASA chooses it's next chief scientist
                </h4>
              </Link>
            </li>
            <li className="discover-hero__item">
              <Link
                to=""
                className="discover-hero__item-link position-relative rounded-4 overflow-hidden d-block"
              >
                <img
                  src={PicsumImage}
                  alt="card img"
                  className="discover-hero__item-img w-100 h-100 "
                />
                <h4 className="discover-hero__item-title position-absolute bottom-0 text-white m-3 fw-semibold">
                  NASA chooses it's next chief scientist
                </h4>
              </Link>
            </li>
          </ul>
        </section>

        <section className="discover-authors py-3 border-top">
          <div className="discover-authors__inner mb-4 d-flex justify-content-between align-items-center">
            <h2 className="discover-authors__inner-title fw-semibold fs-4 text-capitalize">
              Popular authors
            </h2>
            <button className="discover-authors__inner-btn text-uppercase text-white border-0 py-1 px-3 rounded-5">
              See all
            </button>
          </div>
          <ul className="discover-authors__list d-flex flex-column gap-4">
            <li className="discover-authors__item">
              <Link
                to=""
                className="discover-authors__item-link rounded-3 d-flex align-items-center justify-content-between text-dark"
              >
                <div className="discover-authors__item-link-inner d-flex align-items-center gap-3 ">
                  <img
                    src={PicsumImage2}
                    alt="card img"
                    className="discover-authors__item-link-img rounded-circle"
                  />
                  <div className="discover-authors__item-link-box">
                    <h3 className="discover-authors__item-link-box-title fs-4 text-capitalize">
                      Jess Roxana
                    </h3>
                    <p className="discover-authors__item-link-box-text text-secondary">
                      NBA & NFL Journalist
                    </p>
                  </div>
                </div>
                <AiFillStar size={`1.5em`} color="gold" />
              </Link>
            </li>
            <li className="discover-authors__item">
              <Link
                to=""
                className="discover-authors__item-link rounded-3 d-flex align-items-center justify-content-between text-dark"
              >
                <div className="discover-authors__item-link-inner d-flex align-items-center gap-3 ">
                  <img
                    src={PicsumImage2}
                    alt="card img"
                    className="discover-authors__item-link-img rounded-circle"
                  />
                  <div className="discover-authors__item-link-box">
                    <h3 className="discover-authors__item-link-box-title fs-4 text-capitalize">
                      Jess Roxana
                    </h3>
                    <p className="discover-authors__item-link-box-text text-secondary">
                      NBA & NFL Journalist
                    </p>
                  </div>
                </div>
                <AiFillStar size={`1.5em`} color="gold" />
              </Link>
            </li>
            <li className="discover-authors__item">
              <Link
                to=""
                className="discover-authors__item-link rounded-3 d-flex align-items-center justify-content-between text-dark"
              >
                <div className="discover-authors__item-link-inner d-flex align-items-center gap-3 ">
                  <img
                    src={PicsumImage2}
                    alt="card img"
                    className="discover-authors__item-link-img rounded-circle"
                  />
                  <div className="discover-authors__item-link-box">
                    <h3 className="discover-authors__item-link-box-title fs-4 text-capitalize">
                      Jess Roxana
                    </h3>
                    <p className="discover-authors__item-link-box-text text-secondary">
                      NBA & NFL Journalist
                    </p>
                  </div>
                </div>
                <AiFillStar size={`1.5em`} color="gold" />
              </Link>
            </li>
          </ul>
        </section>

        <section className="discover-fashion border-top py-3">
          <h2 className="discover-fashion__title fs-4 fw-semibold mb-3">
            The fashion week
          </h2>
          <ul className="discover-fashion__list d-flex gap-3">
            <li className="discover-fashion__item">
              <Link
                to=""
                className="discover-fashion__item-link d-flex flex-column rounded-2 overflow-hidden"
              >
                <img
                  src={PicsumImage3}
                  alt="card img"
                  className="discover-fashion__item-link-img mb-2 rounded-2"
                />
                <h3 className="discover-fashion__item-link-title text-dark fs-5">
                  Best Clothes showed on fashion week
                </h3>
              </Link>
            </li>
            <li className="discover-fashion__item">
              <Link
                to=""
                className="discover-fashion__item-link d-flex flex-column rounded-2 overflow-hidden"
              >
                <img
                  src={PicsumImage3}
                  alt="card img"
                  className="discover-fashion__item-link-img mb-2 rounded-2"
                />
                <h3 className="discover-fashion__item-link-title text-dark fs-5">
                  Best Clothes showed on fashion week
                </h3>
              </Link>
            </li>
            <li className="discover-fashion__item">
              <Link
                to=""
                className="discover-fashion__item-link d-flex flex-column rounded-2 overflow-hidden"
              >
                <img
                  src={PicsumImage3}
                  alt="card img"
                  className="discover-fashion__item-link-img mb-2 rounded-2"
                />
                <h3 className="discover-fashion__item-link-title text-dark fs-5">
                  Best Clothes showed on fashion week
                </h3>
              </Link>
            </li>
            <li className="discover-fashion__item">
              <Link
                to=""
                className="discover-fashion__item-link d-flex flex-column rounded-2 overflow-hidden"
              >
                <img
                  src={PicsumImage3}
                  alt="card img"
                  className="discover-fashion__item-link-img mb-2 rounded-2"
                />
                <h3 className="discover-fashion__item-link-title text-dark fs-5">
                  Best Clothes showed on fashion week
                </h3>
              </Link>
            </li>

          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default index;
