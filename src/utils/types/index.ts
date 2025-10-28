"landing types";
import { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TNavBar {
  pathName: string;
}

export interface TSearchIcon {
  size: number;
}

export interface TCustomBtn extends ComponentPropsWithoutRef<"button"> {
  text: string;
  children?: ReactNode;
}

export interface TImageHerouBox extends ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  image: string;
}


export interface THerouSection {
  holderWidth: number
}