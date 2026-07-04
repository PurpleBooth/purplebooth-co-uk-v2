import { FC, PropsWithChildren } from "react";
import Link from "next/link";

export const NavLink: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => (
  <Link href={href} data-testid={"NavLink"} className={"cursor-pointer"}>
    <span className={"hover:underline dark:text-white"}>{children}</span>
  </Link>
);
