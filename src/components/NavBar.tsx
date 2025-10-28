import { SearchIcon } from "@/assets/icons";
import Logo from "@/assets/icons/Logo";
import { navBarData } from "@/utils/constant";
import { TNavBar } from "@/utils/types";
import Link from "next/link";
import React, { FC } from "react";

const NavBar: FC<TNavBar> = ({ pathName }) => {
  return (
    <div className="nav-bar w-full flex justify-between items-center">
      <div className="right w-[30%]">
        <Logo />
      </div>
      <div className="center flex justify-center gap-x-8">
        {navBarData.map((item, index) => (
          <Link href={item.link} key={index}>
            <h1
              className={`flex flex-col items-center gap-y-2 ${
                pathName == "/" ? "text-white" : "text-black"
              }`}
            >
              {item.text}
              {pathName == item.link && (
                <hr
                  className={`border-0 outline-0 w-full h-[1px] ${
                    pathName == "/" ? "bg-white" : "bg-black"
                  }`}
                />
              )}
            </h1>
          </Link>
        ))}
      </div>
      <div className="left w-[30%] flex justify-end">
        <SearchIcon size={40} />
      </div>
    </div>
  );
};

export default NavBar;
