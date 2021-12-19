import { FC } from "react";
import Link from "next/link";
import intlFormat from "date-fns/intlFormat";

export const NavFooter: FC = () => (
  <footer className={"text-slate-600 dark:text-slate-400 text-center mt-8"}>
    <Link passHref href={"/license"}>
      <a className={"cursor-pointer hover:underline"}>
        Copyright ©{" "}
        {intlFormat(Date.now(), {
          year: "numeric",
        })}
      </a>
    </Link>
  </footer>
);
