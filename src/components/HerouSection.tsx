import React, { FC } from "react";
import ImageHerouBox from "./ImageHerouBox";
import herouImage1 from "../assets/photos/herou-image1.jpg";
import { herouSectionData } from "@/utils/constant";
import { THerouSection } from "@/utils/types";
import { samim } from "./fonts";
// import herouImage2 from "../assets/photos/herou-image2.jpg";
// import herouImage3 from "../assets/photos/herou-image3.jpg";
// import herouImage1 from "../../public/photos/herou-image1.jpg"

const HerouSection: FC<THerouSection> = ({ holderWidth }) => {
  return (
    <div
      className="text-center mt-20 flex-col items-center"
      style={holderWidth ? { width: `${holderWidth}%` } : { width: "100%" }}
    >
      <h1 className={`font-bold border-dark text-[22px] ${samim.className}`}>
        انتخابی سالم از گوشت ‌های منجمد ممتاز
      </h1>
      <p className="text-gray mt-1.5">
        تاز‌گی، بهداشت و کیفیت بالا در هر بسته؛ مجموعه‌ای کامل از مرغ و گوشت
        قرمز منجمد برای یک خرید مطمئن و لذت‌بخش.
      </p>
      <div className="desc-items-control w-full flex flex-wrap gap-5 mt-7">
        {herouSectionData.map((item, index) => (
          <ImageHerouBox
            key={index}
            className={`w-[35%] text-start pt-12 pb-5 ${
              index == 0 ? "w-full" : ""
            }`}
            image={herouImage1.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HerouSection;
