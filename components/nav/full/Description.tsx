import { FC, PropsWithChildren } from "react";

export const Description: FC<PropsWithChildren<{}>> = ({ children }) => (
  <aside className={"text-slate-600 dark:text-slate-400 text-2xl ml-4 mt-8"}>
    {children}
  </aside>
);
