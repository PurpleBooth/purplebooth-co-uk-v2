import { FC } from "react";
import Link from "next/link";
import { CopyrightNotice } from "../CopyrightNotice";

export const NavFooter: FC = () => (
  <footer className={"mt-8 text-center text-slate-600 dark:text-slate-400"}>
    <Link passHref href={"/license"}>
      <a className={"cursor-pointer hover:underline"}>
        <CopyrightNotice />
      </a>
    </Link>
  </footer>
);
