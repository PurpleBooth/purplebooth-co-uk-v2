import { FC, PropsWithChildren, ReactElement } from "react";
import { Props } from "./PrimaryNavItem";

export const PrimaryNav: FC<
  PropsWithChildren<{}> &
    ({ children?: ReactElement<Props>[] } | { children?: ReactElement<Props> })
> = ({ children }) => (
  <ul className={"ml-16 flex flex-col mt-8"}>{children}</ul>
);
