import { FunctionComponent } from "react";
import Link from "next/link";

export const IndexItemTitle: FunctionComponent<{
  title: string;
  href: string;
}> = ({ title, href }) => (
  <Link passHref href={href}>
    <a className={"no-underline hover:underline"}>
      <h1 className={"mb-1"}>{title}</h1>
    </a>
  </Link>
);
