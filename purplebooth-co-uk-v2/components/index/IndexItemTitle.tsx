import { FC } from "react";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  pageHasTitle?: boolean;
}

export const IndexItemTitle: FC<Props> = ({ title, href, pageHasTitle }) => (
  <Link passHref href={href}>
    <a className={"no-underline hover:underline"}>
      {pageHasTitle ? (
        <h2 className={"mb-1"}>{title}</h2>
      ) : (
        <h1 className={"mb-1"}>{title}</h1>
      )}
    </a>
  </Link>
);
