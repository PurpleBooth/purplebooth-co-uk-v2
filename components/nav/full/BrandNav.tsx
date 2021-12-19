import { FC, PropsWithChildren, ReactElement } from "react";
import { Props } from "./BrandNavItem";

export const BrandNav: FC<
  PropsWithChildren<{}> &
    ({ children?: ReactElement<Props>[] } | { children?: ReactElement<Props> })
> = ({ children }) => (
  <ul className={"flex flex-row gap-4 justify-center mt-8"}>{children}</ul>
);
