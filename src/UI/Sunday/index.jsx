import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./style.scss";
import Img from "./../../assets/images/images.jpg";
const index = () => {
  return (
    <>
      <div className="card__sunday position-relative">
        <img src={Img} className="rounded-4 sunday-img" alt="images" />
        <div className="d-flex align-items-start justify-content-between flex-column g-2 position-absolute sunday__text left-0">
          <div className="d-flex justify-content-between g-2 align-items-center">
            <AiOutlineClockCircle className="clock" />
            <p className="text-white m-0 mx-2">2 day ago</p>
          </div>
          <div>
            <h3 className="fw-bold text-white fs-5">
              Booba on Fire in His New Gotham Clip
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
