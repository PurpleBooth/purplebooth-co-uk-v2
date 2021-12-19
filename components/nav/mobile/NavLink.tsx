import { FC, PropsWithChildren } from "react";
import Link from "next/link";

export const NavLink: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => (
  <Link passHref href={href}>
    <a className={"cursor-pointer"}>
      <span className={"hover:underline dark:text-white"}>{children}</span>
    </a>
  </Link>
);
