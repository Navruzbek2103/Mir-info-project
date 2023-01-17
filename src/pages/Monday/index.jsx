import React from "react";
import "./style.scss";
import Img from "../../assets/images/thumb-5.jpg";
const index = () => {
  return (
    <>
      <div className="monday_section w-100">
        <div className="monday_top d-flex justify-content-between w-100 align-items-start ">
          <div className="monday__top--right w-50">
            <div className="monday__card position-relative">
              <img src={Img} className="monday__img rounded-2" alt="monday images" />
              <p className="text-white position-absolute monday__text">Nadal Wins at Roland Garros</p>
            </div>
          </div>
          <div className="monday__top--left w-50">
          <div className="monday__card position-relative">
              <img src={Img} className="monday__img--right rounded-2" alt="monday images" />
              <p className="text-white position-absolute monday__text">Nadal Wins at Roland Garros</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
