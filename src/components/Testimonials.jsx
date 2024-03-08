import React from "react";
import styles from "../styles";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
    >
      {/*To do*/}
      <div className="absolute w-[60%] h-[60%] z-[0] -right-[50%] rounded-full blue__gradient"></div>

      <div className="flex flex-col items-center justify-between w-full mb-6 md:flex-row sm:mb-16 z-[1] relative">
        <h1 className={styles.heading2}>
          What people are <br className="hidden sm:block" /> saying about us
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} max-w-[470px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}></FeedbackCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
