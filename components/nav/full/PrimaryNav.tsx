import { FC, PropsWithChildren } from "react";

export const PrimaryNav: FC<PropsWithChildren<{}>> = ({ children }) => (
  <ul className={"ml-16 flex flex-col mt-8"}>{children}</ul>
);
