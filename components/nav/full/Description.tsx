import { FC, PropsWithChildren } from "react";

export const Description: FC<PropsWithChildren<{}>> = ({ children }) => (
  <aside className={"ml-4 mt-8 text-2xl text-slate-600 dark:text-slate-400"}>
    {children}
  </aside>
);
