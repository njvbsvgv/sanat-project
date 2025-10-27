import { TCustomBtn } from "@/utils/types";
import React, { FC } from "react";

const CustomBtn: FC<TCustomBtn> = ({ text, children, className }) => {
  if (children) {
    return (
      <button className={`${className}`}>
        {children}
        {text}
      </button>
    );
  } else {
    return (
      <button className={`${className} rounded-2xl py-2.5 px-3.5`}>
        {text}
      </button>
    );
  }
};

export default CustomBtn;
