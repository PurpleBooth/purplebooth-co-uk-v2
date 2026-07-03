import { FunctionComponent, PropsWithChildren } from "react";
import Link from "next/link";

export const IndexItemArrowButton: FunctionComponent<
  PropsWithChildren<{ href: string }>
> = ({ href, children }) => {
  return (
    <Link
      href={href}
      data-testid={"IndexItemArrowButton a"}
      className={"block p-1 no-underline"}
    >
      <span className={"hover:underline"}>{children}</span> →
    </Link>
  );
};
