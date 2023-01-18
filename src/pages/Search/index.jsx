import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
const index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transitionDuration: 0.1 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 1, transitionDuration: 0.1, x: -10000 }}
      transition={{
        delay: 0,
        x: { duration: 0.1 },
        default: { ease: "easeInOut" },
      
      }}
    >
      {/* <div className="container"> */}
      <h1>Search page</h1>
      {/* </div> */}
    </motion.div>
  );
};

export default index;
