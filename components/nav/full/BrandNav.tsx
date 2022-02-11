import { FC, PropsWithChildren } from "react";

export const BrandNav: FC<PropsWithChildren<{}>> = ({ children }) => (
  <ul className={"mt-8 flex flex-row justify-center gap-4"}>{children}</ul>
);
