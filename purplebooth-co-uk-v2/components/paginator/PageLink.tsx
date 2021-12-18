import { PropsWithChildren } from "react";
import Link from "next/link";

interface PageLinkProps {
  page: number;
  disabled?: boolean;
  selected?: boolean;
}

export const PageLink = ({
  disabled,
  page,
  children,
  selected,
}: PropsWithChildren<PageLinkProps>) => {
  if (disabled) {
    return <span className={"m-2"}>{children}</span>;
  }

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
