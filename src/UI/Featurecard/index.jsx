import React from 'react';
import Georg from "./../../assets/images/Gregory13.jpg";
import "./style.scss"

import Img from "./../../assets/images/thumb-1.jpg"

const index = () => {
    return (
        <>
         <div className="today__card card w-100 bg-white feature-card rounded-4 mb-4">
              <img
                src={Georg}
                className="img-feature w-100 "
                alt="images"
              />
              <div className="card-body px-3 py-4 w-100">
                <span className='text-secondary fw-bold '>GAMING</span>
                <h2 className="card__body--title my-2 ">
                  The futurre of gaming
                </h2>
                <div className="d-flex justify-content-between w-100">
                  <div className="d-flex align-items-center gap-2">
                    <p className="text-secondary "> Mozilla has announced a new version of its browser for augmented reality</p>
                  </div>
                  
                </div>
              </div>
            </div>
        </>
    );
};

export default index;