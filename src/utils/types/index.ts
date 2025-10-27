"landing types";

import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TNavBar {
  pathName: string;
}

export interface TSearchIcon {
  size: number;
}

export interface TCustomBtn extends ComponentPropsWithoutRef<"button"> {
  text: string;
  children?: ReactNode
}