import React from "react";
import "./style.scss";
import Img from "./../../assets/images/thumb-1.jpg";
import Week from "./../../UI/Week";
import { useState } from "react";
import { FaFire } from "react-icons/fa";
import FeatureCard from "./../../UI/Featurecard";
import { FaComment } from "react-icons/fa";
import Sunday from "./../../UI/Sunday";
import Monday from "./../../pages/Monday/index";

const index = () => {
  return (
    <>
      <section className="w-100%">
        {/* <div className="container"> */}
          <div className="d-flex flex-column">
            <div className="today-section d-flex flex-column">
              <Week />
              <div className="today__card w-100 mb-4 position-relative">
                <span className="bg-danger rounded-4 hot d-flex align-items-center gap-1 position-absolute">
                  <FaFire />
                  Hot
                </span>
                <img
                  src={Img}
                  className="img-today w-100 rounded-4"
                  alt="images"
                />
                <div className="card-body position-absolute bottom-0 px-3 py-4 w-100">
                  <h2 className="card__body--title text-white my-2 ">
                    Soprano Announces His New Album
                  </h2>
                  <div className="d-flex justify-content-between w-100">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={Img}
                        width={50}
                        height={50}
                        className="rounded-5"
                        alt="avatar"
                      />
                      <p className="text-white "> Elena Anka</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FaComment className="comment" />
                      <span className="text-white mx-3">22</span>
                    </div>
                  </div>
                </div>
              </div>
              <FeatureCard />
              <div className="today__card w-100 position-relative">
                <img
                  src={Img}
                  className="img-today w-100 rounded-4"
                  alt="images"
                />
                <div className="card-body position-absolute bottom-0 px-3 py-4 w-100">
                  <h2 className="card__body--title text-white my-2 ">
                    Soprano Announces His New Album
                  </h2>
                  <div className="d-flex justify-content-between w-100">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={Img}
                        width={50}
                        height={50}
                        className="rounded-5"
                        alt="avatar"
                      />
                      <p className="text-white "> Elena Anka</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FaComment className="comment" />
                      <span className="text-white mx-3">22</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="today__bottom ">
              <Monday />
              <Week />
              <Sunday />
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default index;
