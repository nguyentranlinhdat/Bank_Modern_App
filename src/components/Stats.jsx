import React from "react";
import { stats } from "../constants";
import styles from "../styles";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-2 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex flex-row justify-start items-center m-3`}
      >
        <h4 className="font-semibold text-white font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43]">
          {stat.value}
        </h4>
        <p className="font-normal text-gradient uppercase ml-3 font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21]">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
