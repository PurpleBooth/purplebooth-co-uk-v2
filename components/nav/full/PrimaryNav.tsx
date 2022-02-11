import { FC, PropsWithChildren } from "react";

export const PrimaryNav: FC<PropsWithChildren<{}>> = ({ children }) => (
  <ul className={"ml-16 mt-8 flex flex-col"}>{children}</ul>
);
