import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export type Props = PropsWithChildren<{ href: string }>;
export const PrimaryNavItem: FC<Props> = ({ href, children }) => (
  <li>
    <Link passHref href={href}>
      <a data-testid={"PrimaryNavItem"} className={"cursor-pointer"}>
        <span className={"text-slate-800 dark:text-slate-200"}>
          <FontAwesomeIcon icon={faSquare} />
        </span>
        &nbsp;
        <span className={"hover:underline dark:text-white"}>{children}</span>
      </a>
    </Link>
  </li>
);
