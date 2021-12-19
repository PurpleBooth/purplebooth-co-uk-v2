import { FC, PropsWithChildren } from "react";

export const BrandNav: FC<PropsWithChildren<{}>> = ({ children }) => (
  <ul className={"flex flex-row gap-4 justify-center mt-8"}>{children}</ul>
);
