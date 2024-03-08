import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col justify-between px-10 py-12 feedback-card rounded-[20px] my-5 mr-0 sm:mr-5 md:mr-10 max-w-[370px]">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="my-10 font-normal text-white font-poppins leading-[32px] text-18px">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-semibold font-poppins text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
