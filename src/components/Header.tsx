"use client";
import { usePathname } from "next/navigation";
import React from "react";
import NavBar from "./NavBar";
import HeaderImage from "../assets/photos/header-image.png";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import shabnameFDLocal from "next/font/local";
import { samim } from "./fonts";

const shabnam = shabnameFDLocal({
  src: "../assets/fonts/Shabnam-FD.ttf",
});

const Header = () => {
  const pathName = usePathname();

  switch (pathName) {
    case "/":
      return (
        <div className="heaer pt-6 pb-18 bg-black px-10">
          <div className="navbar-control">
            <NavBar pathName={pathName} />
          </div>
          <div className="bottom flex justify-center mt-12">
            <div className="items-control w-4/5 flex items-center gap-x-5">
              <div className="text-control">
                <h1 className={`text-white text-[29px] font-bold ${samim.className}`}>
                  شما متفاوت هستید ، انتخاب شما هم باید
                  <span className="text-yellow-400"> حرفه ای </span>
                  باشد.
                </h1>
                <h2 className="text-white text-[18px] mt-4">
                  محصولات ما از معتبر ترین های دنیا هستند که کیفیت را در عمل
                  ثابت کرده اند.اینجا میفهمید ظاهر گوشت معیار کیفیت نیست بلکه
                  انتخابی اگاهانه هست
                </h2>
                <CustomBtn
                  text="تماس برای مشاوره رایگان !"
                  className={`bg-[#EBE719] text-[#2D2D2D] font-bold mt-8 cursor-pointer ${shabnam.className}`}
                />
              </div>
              <div className="image-control">
                <Image src={HeaderImage} alt="" width={550} />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="navbar-control px-10">
          <NavBar pathName={pathName} />
        </div>
      );
  }
};

export default Header;
