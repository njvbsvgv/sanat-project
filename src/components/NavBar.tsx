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
            <h1 className={`${pathName == "/" ? "text-white" : "text-black"}`}>
              {item.text}
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
