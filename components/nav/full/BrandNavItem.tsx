import { FC } from "react";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Props {
  href: string;
  title: string;
  icon: IconProp;
}

export const BrandNavItem: FC<Props> = ({ href, title, icon }) => (
  <li>
    <Link passHref href={href}>
      <a
        data-testid={"BrandNavItem"}
        className={"cursor-pointer text-slate-800 dark:text-slate-200"}
      >
        <FontAwesomeIcon size={"3x"} title={title} icon={icon} />
      </a>
    </Link>
  </li>
);
