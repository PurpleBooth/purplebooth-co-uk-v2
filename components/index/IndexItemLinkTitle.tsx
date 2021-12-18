import { FC } from "react";
import Link from "next/link";
import { IndexItemTitle } from "./IndexItemTitle";

interface Props {
  title: string;
  href: string;
  pageHasTitle?: boolean;
}

export const IndexItemLinkTitle: FC<Props> = ({
  title,
  href,
  pageHasTitle,
}) => (
  <Link passHref href={href}>
    <a className={"no-underline hover:underline"}>
      <IndexItemTitle title={title} pageHasTitle={pageHasTitle} />
    </a>
  </Link>
);
