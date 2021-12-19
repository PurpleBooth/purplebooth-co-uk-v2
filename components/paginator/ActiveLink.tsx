import { FC, PropsWithChildren } from "react";
import Link from "next/link";

export const ActiveLink: FC<
  PropsWithChildren<{ page: number; selected?: boolean }>
> = ({ children, page, selected }) => {
  return (
    <Link href={page == 1 ? "/" : `/page/${encodeURIComponent(page)}`} passHref>
      <a
        className={`hover:bg-slate-100 dark:hover:bg-slate-900 p-2 ${
          selected ? " bg-slate-100 dark:bg-slate-900" : ""
        }`}
      >
        {children}
      </a>
    </Link>
  );
};
