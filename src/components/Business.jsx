import React from "react";
import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`${styles.flexCenter} w-[64px] h-[64px] bg-dimBlue rounded-full`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-semibold text-white font-poppins text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-dimWhite font-poppins text-[16px] leading-[25px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="hidden sm:block" />
          we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((features, index) => (
          <FeatureCard key={features.di} {...features} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
