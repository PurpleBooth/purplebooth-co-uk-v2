import { FC, PropsWithChildren } from "react";

export const DisabledLink: FC<PropsWithChildren<{}>> = ({ children }) => (
  <span className={"m-2"}>{children}</span>
);
