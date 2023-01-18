import React from "react";
import Img from "./../../assets/images/thumb-15.jpg";
import "./style.scss";
const index = () => {
  return (
    <>
      <div className="card d-flex flex-row justify-content-start gap-3 align-items-start">
        <img src={Img} className="card__img" alt="images" />
        <div className="d-flex flex-column align-items-start">
          <span className="text-secondary fw-bold text-uppercase">Fashion</span>
          <h3 className="text-black fw-bold">
            The 6th Edition of the Body Painting Contest
          </h3>
          <div className="d-flex justify-content-between g-2 align-items-center">
            <img
              src={Img}
              width={30}
              height={30}
              className="rounded-5"
              alt="avatar"
            />
            <p className="text-secondary ">Elena Anka </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
