import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} p-[2px] cursor-pointer w-[140px] h-[140px] rounded-full bg-blue-gradient`}
  >
    <div
      className={`${styles.flexCenter} w-full h-[100%] bg-primary flex-col rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-medium font-poppins leading-[23px] text-[18px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-medium font-poppins leading-[23px] text-[18px] ">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
